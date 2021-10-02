import React from 'react'

import "./Navbar.css";
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <>
        <header>
        <nav>
            <img src="img/flood.png" alt="" />
            <h3>Flood Detection</h3>
            <div class="navas" id="happy">
                <i class="fas fa-times fa-custom" onclick="hidemenu()"></i>
                <ul class="navbar">
                    <li> <Link to=""> Home</Link></li>
                    <li> <Link to="#about"> About</Link></li>
                    <li> <Link to="#footer"> Contact</Link></li>
                    <li> <Link to="/login"> Login</Link></li>
                </ul>
            </div>
            <i class="fas fa-bars fa-custom" onclick="showmenu()"></i>
        </nav>
        <div class="text-box">
            <h1>EARLY FLOOD DETECTION</h1>
            <p>Want to Take First Step</p>
            <Link to="Upload" class="hero-btn">Get Started</Link>
        </div>
    </header>

    <section class="review" id="about">
        <h1>What Our Customer Says</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

        <div class="row">
            <div class="test-col">
                <img src="img/user1.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit itaque, voluptatibus, alias quae
                        esse fugiat voluptates commodi ex mollitia laborum accusantium quas deleniti!</p>
                    <h3>Christin Barely</h3>
                </div>
            </div>
            <div class="test-col">
                <img src="img/user2.jpg" alt=""/>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veniam ab ducimus delectus
                        facere aspernatur enim dignissimos nesciunt alias! Dolorem cumque doloremque nobis quod aperiam
                        inventore adipisci quae facere id?</p>
                    <h3>David Barely</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="base">

        <section class="footer" id="footer">
            <h1>Join us to receive current information regarding flood</h1>
            <p>Already a Customer? Sign in </p>

            <div class="row">
                <div class="footer-col">
                    <h3>Contact Us</h3>
                    <p>Flood Detection Office, Mumbai, Maharashtra <br/> +91 894652137 <br/> flood@gmail.com </p>
                </div>
                <div class="footer-col">
                    <h3>Follow Us</h3>
                    <div class="social">
                        <h2><Link to="#"><img src="img/facebook-logo.png" alt="" height="20px"/></Link></h2>
                        <h2><Link to="#"><img src="img/twitter.png" alt="" height="20px"/></Link></h2>
                        <h2> <Link to="#"> <img src="img/instagram.png" alt="" height="20px"/></Link></h2>
                        <h2> <Link to="#"> <img src="img/aedin.png" alt="" height="20px"/></Link></h2>
                    </div>
                </div>
            </div>
            <h4>Copyright &copy; | All Rights Reserved | CodeWithJack </h4>
        </section>
    </section>
        </>
    )
}
