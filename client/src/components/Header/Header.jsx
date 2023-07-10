import { useEffect,useState,useContext } from "react";
import {useNavigate} from "react-router-dom";

//icons-library
import{TbSearch} from "react-icons/tb";
import {CgShoppingCart} from "react-icons/cg";
import {AiOutlineHeart} from "react-icons/ai";

//components
import  Search  from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";

import "./Header.scss";


const Header = () => {
    return (
            <header className="main-header">
                    <div className="header-context">
                        <div className="logo">The Wagging Tails</div>
                        <div className="search-bar">
                            <div className="search-div">Search,discover </div>
                            <div className="search-icon"><TbSearch/></div>
                        </div>
                        <div className="right-div">
                            <ul className="right">
                                <li>About</li>
                                <li>Categories</li>
                                <li><AiOutlineHeart/></li>
                                <li><span className="cart-icon"><CgShoppingCart/>Cart</span></li>
                            </ul>
                        </div>
                    </div>
            </header>
            );
};

export default Header;
