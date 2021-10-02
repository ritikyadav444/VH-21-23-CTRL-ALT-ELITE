import React from 'react'
import "./Sign.css";
import { Link } from 'react-router-dom';
export default function Sign() {
    return (
        <>
        {/* <header>
        <nav>
            <img src="img/flood.png" alt="" />
            <h3>Flood</h3>
            <div class="navlinks" id="happy">
                <i class="fas fa-times fa-custom" onclick="hidemenu()"></i>
                <ul class="navbar">
                    <li> <a href=""> Home</a></li>
                    <li> <a href="#about"> About</a></li>
                    <li> <a href=""> Contact</a></li>
                    <li> <a href="/login"> Login</a></li>
                </ul>
            </div>
            <i class="fas fa-bars fa-custom" onclick="showmenu()"></i>
        </nav>

    </header> */}

    <section class="signup-form">
        <div class="container">
            <h1>Sign Up</h1>
            <form action="/" id="" method="post">
                <div class="name txt">
                    <div class="heading">Full Name</div>
                        <input type="text" name="name" id="" placeholder="Enter your name" />
                </div>
                <div class="no txt">
                    <div class="heading">Enter number</div>
                        <input type="text" name="phone" id="" placeholder="Enter your number"/>
                </div>
                <div class="mail txt">
                    <div class="heading">Enter Email</div>
                    <input type="email" name="email" id="" placeholder="Enter your email"/>
                </div>
                <div class="mail txt">
                    <div class="heading">Enter password</div>
                    <input type="password" name="" id="" placeholder="enter your password"/>
                </div>
                <button class="btn">Save</button>
            </form>
        </div>
    </section>
    </>
    )
}
