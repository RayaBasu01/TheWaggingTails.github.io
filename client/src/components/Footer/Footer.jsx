import React from "react";
import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,
} from "react-icons/fa" ;

import {CgShoppingCart} from "react-icons/cg";

import Payment from "../../assets/payments.png"

import "./Footer.scss";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, fuga.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Category</div>
                    <div className="text">Foods & Treats</div>
                    <div className="text">Beds</div>
                    <div className="text">Cages & tanks</div>
                    <div className="text">Gromming</div>
                    <div className="text">Toys</div>
                    <div className="text">Medicine</div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-items">
                         <FaLocationArrow/>
                         <div className="text">465 Hinjewadi, Pune, Maharastra-100005</div>
                    </div>
                    <div className="c-items">
                         <FaMobileAlt/>
                         <div className="text">Phone: 9876543210</div>
                    </div>
                    <div className="c-items">
                         <FaEnvelope/>
                         <div className="text">E-mail: thewaggingtails@twt.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <div className="text"><CgShoppingCart/>Cart</div>
                    <div className="text">About</div>
                    <div className="text">Categories</div>
                    <div className="text">Privacy Policy</div>
                    <div className="text">Returns</div>
                    <div className="text">Contact Us</div>

                </div>
                
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">Credit RB.co @2023</div>
                    <img src={Payment} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
