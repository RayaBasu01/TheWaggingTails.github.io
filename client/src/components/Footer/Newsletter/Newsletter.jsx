import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa" ;

import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-sec">
            <div className="newsletter-content">
                <span className="small-text">NewsLetter</span>
                <span className="big-text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="text" placeholder="Email Address" id="" />
                    <button>Subscribe</button>
                </div>
                <div className="text">Used accordance to our privacy policy</div>
                <div className="social-icons">
                    <div className="icon">
                        <FaFacebookF size={15}/>
                    </div>
                    <div className="icon">
                        <FaTwitter size={15}/>
                    </div>
                    <div className="icon">
                        <FaInstagram size={15}/>
                    </div>
                    <div className="icon">
                        <FaLinkedinIn size={15}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
