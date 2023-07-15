import {MdClose} from "react-icons/md";
import {BsCartX} from "react-icons/bs";


import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
const Cart = ({setshowCart}) => {
    return (
        <div className="cart-panel">
            <div className="behind-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={()=>setshowCart(false)} >
                        <MdClose/>
                        <span className="text">Close</span>
                    </span>
                </div>
                {/*  empty cart*/}
                {/* <div className="empty-cart">
                    <BsCartX/>
                    <span>No Products in the cart.</span>
                    <button className="return">go to shop</button>
                </div> */}
                <>
                    <CartItem/>
                    <div className="cart-footer">
                        <div className="subtotal">
                            <span className="text">Subtotal</span>
                            <span className="text total-pr"> &#8377; 499</span>
                        </div>
                        <div className="btn">
                            <button className="checkout-btn">Check Out</button>
                        </div>
                    </div>
                </>

            </div>
        </div>
    );
};

export default Cart;
