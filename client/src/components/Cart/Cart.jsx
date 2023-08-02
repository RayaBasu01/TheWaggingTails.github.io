import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { loadStripe } from "@stripe/stripe-js";
import { makePayment } from "../../utils/api";


const Cart = ({ setshowCart }) => {
    const { cartItems, cartSubTotal } = useContext(Context);
    const navigate = useNavigate();
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePayment.post("/api/orders", {
                products: cartItems,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });

        } catch (error) {
            console.log(error);
        }


    };

    return (
        <div className="cart-panel">
            <div className="behind-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span className="close-btn" onClick={() => setshowCart(false)} >
                        <MdClose />
                        <span className="text">Close</span>
                    </span>
                </div>
                {/*  empty cart*/}
                {!cartItems?.length &&
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No Products in the cart.</span>
                        <button className="return" onClick={() => { navigate("/"); setshowCart(false) }}>go to shop</button>
                    </div>}

                {!!cartItems?.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal</span>
                                <span className="text total-pr"> &#8377; {cartSubTotal}</span>
                            </div>
                            <div className="btn">
                                <button className="checkout-btn" onClick={handlePayment}>Check Out</button>
                            </div>
                        </div>
                    </>
                )}

            </div>
        </div>
    );
};

export default Cart;
