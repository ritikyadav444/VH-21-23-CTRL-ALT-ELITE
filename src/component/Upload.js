import React from 'react'
import "./Upload.css";

export default function Upload() {
    return (
        <>
        {/* <header>
        <nav>
            <img src="img/flood.png" alt="" />
            <h3>Flood</h3>
            <div class="navlinks" id="happy">
                <i class="fas fa-times fa-custom" onclick="hidemenu()"></i>
                <ul class="navbar">
                    <li> <a  href=""> Home</a></li>
                    <li> <a  href="#about"> About</a></li>
                    <li> <a href=""> Contact</a></li>
                    <li> <a  href="/login"> Sign up</a></li>
                </ul>
            </div>
            <i class="fas fa-bars fa-custom" onclick="showmenu()"></i>
        </nav>
    </header> */}

    <section class="signup-form">
        <div class="container">
            <h1>Upload here</h1>
            <form action="/" id="" method="post">
                <div class="mail txt">
                    <div class="heading">Upload photo </div>
                    <input type="file" name="" id="" accept="image/" placeholder="upload photo" />
                </div>
                <div class="mail txt">
                    <div class="heading">Enter Location</div>
                    <input type="text" name="" id="" placeholder="enter location"/>
                </div>
                <div class="date txt">
                    <div class="heading">Enter Date</div>
                        <input type="date" name="date" id="" placeholder="Enter your date"/>
                </div>
                <button class="btn">Save</button>
            </form>
        </div>
    </section>
    </>
    )
}
