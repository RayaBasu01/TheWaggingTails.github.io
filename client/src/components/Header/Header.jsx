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

    const [scrolled , setScrolled] =useState(false);
    const [showCart , setshowCart] =useState(false);
    const [showSearch , setshowSearch] =useState(false);

    const handlescroll=()=>{
        const offset=window.scrollY;
        if(offset>200){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    //react-hook
    useEffect(()=>{
         window.addEventListener("scroll",handlescroll)
    },[]);
    return (
        <>
            <header className={`main-header ${scrolled? 'sticky-header' : ''}`}>
                    <div className="header-context">
                        <div className="logo">TheWaggingTails</div>
                        <div className="search-bar" onClick={()=> setshowSearch(true)}>
                            <div className="search-div">Search</div>
                            <div className="search-icon"><TbSearch/></div>
                        </div>
                        <div className="right-div">
                            <ul className="right">
                                <li>About</li>
                                <li>Categories</li>
                                <li><AiOutlineHeart/></li>
                            </ul>
                            <ul className="cart">
                                <li>
                                    <span className="cart-icon" onClick={()=> setshowCart(true)}>
                                        <CgShoppingCart/>
                                        <span>3</span>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
            </header>
            {showCart && <Cart setshowCart={setshowCart}/>}
            {showSearch && <Search setshowSearch={setshowSearch}/>}
            
        </>
            );
};

export default Header;
