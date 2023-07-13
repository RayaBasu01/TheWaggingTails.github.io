import "./SingleProduct.scss";
import React from "react";
import prod1 from "../../assets/products/food-1.webp"
import RelatedProducts from "./RelatedProducts/RelatedProducts"
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa" ;
const SingleProduct = () => {
    return (
        <div className="single-product-main-content">
            <div className="layout">
                <div className="single-product-page">
                    <div className="left">
                        <img src={prod1} alt="" />
                    </div>
                    <div className="right">
                        <div className="name">Product Name</div>
                        <div className="price">&#8377; 499</div>
                        <div className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Voluptate dolorum omnis autem pariatur consectetur reiciendis saepe ullam? 
                        Vel vero excepturi officia expedita soluta esse mollitia. 
                        Ipsa suscipit quidem atque animi laudantium expedita dolor? 
                        Unde dolores nostrum accusantium odio perspiciatis tenetur natus! Similique quas 
                        nobis esse hic? Blanditiis quaerat eos suscipit.
                        </div>
                        <div className="cart-buttons">
                            <div className="quantity">
                                <span>-</span>
                                <span>1</span>
                                <span>+</span>
                            </div>
                            <button>
                                <FaCartPlus size={20}/>
                                ADD TO CART
                            </button>
                        </div>

                        <span className="divider"/>

                        <div className="info-item">
                            <span className="text-bold">Category :
                                <span>Dog Food</span>
                            </span>
                            <span className="text-bold">Share on :
                                <span className="social-icons">
                                    <FaFacebookF size={16}/>
                                    <FaTwitter size={16}/>
                                    <FaInstagram size={16}/>
                                    <FaLinkedinIn size={16}/>
                                    <FaPinterest size={16}/>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <RelatedProducts/>
            </div>
        </div>
    );
};

export default SingleProduct;
