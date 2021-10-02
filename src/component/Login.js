import React from 'react'
import "./Login.css";

export default function Login() {
    return (
        <>
        {/* <header>
        <nav>
            <img src="img/flood.png" alt=""/>
            <h3>Flood</h3>
            <div className="navlinks" id="happy">
                <i className="fas fa-times fa-custom" onclick="hidemenu()"></i>
                <ul className="navbar">
                    <li> <a href=""> Home</a></li>
                    <li> <a href="#about"> About</a></li>
                    <li> <a href=""> Contact</a></li>
                    <li> <a href="/login"> Login</a></li>
                </ul>
            </div>
            <i className="fas fa-bars fa-custom" onclick="showmenu()"></i>
        </nav>
    </header> */}

    <section className="signup-form">
        <div className="container">
            <h1>Login</h1>
            <form action="/" id="" method="post">
                <div className="mail txt">
                    <div className="heading">Enter Email</div>
                    <input type="email" name="email" id="" placeholder="Enter your email" />
                </div>
                <div className="mail txt">
                    <div className="heading">Enter password</div>
                    <input type="password" name="" id="" placeholder="enter your password" />
                </div>
                <button className="btn">Login</button>
                <div className="mail txt">
                  <h3>  Don't have account? <a href="/Sign">Sign Up</a> </h3>
                </div>
            </form>
        </div>
    </section>
 
        </>
    )
}
