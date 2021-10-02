from flask import Flask,render_template,request,url_for
import cv2
import tensorflow as tf
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config["VIDEO_UPLOADS"] = "static\\video\\uploads"

model = tf.keras.models.load_model('models/model_v1')

@app.route("/")
def index():
    return render_template("upload.html")


@app.route("/detect_flood",methods = ['POST'])
def detect_flood():
    filename = ""
    pred=""
    if request.method == "POST":
        if request.files:
            video = request.files["ip"]
            filename = secure_filename(video.filename)
            video.save(os.path.join(app.config["VIDEO_UPLOADS"], filename))
    cap = cv2.VideoCapture(app.config["VIDEO_UPLOADS"] + str(filename))
    i = 0
    count_nfd, count_fd = 0, 0
    while (cap.isOpened()):
        success, frame = cap.read()
        if not success:
            break
        frame = cv2.cvtColor(frame,cv2.COLOR_BGR2GRAY)
        frame = cv2.resize(frame,(384,512))
        frame = frame.reshape((1,384,512,1))
        p = model.predict(frame)
        if(p[0][0] < p[0][1]):
            count_nfd += 1
        else:
            count_fd += 1
        cv2.waitKey(1)
    cap.release()
    cv2.destroyAllWindows()
    if (count_nfd > count_fd):
        pred = "No Flood Detected"
        
    else:
        pred = "Flood Detected"
    if pred == "" : pred = "There was some error"
    return render_template("upload.html",pred=pred)

if __name__ == "__main__":
    app.run(debug=True)