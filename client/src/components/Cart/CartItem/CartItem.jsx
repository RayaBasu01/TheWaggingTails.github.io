import "./CartItem.scss";
import {MdClose} from "react-icons/md";
import { Context } from "../../../utils/context";
import prod1 from "../../../assets/products/food-1.webp"
import { useContext } from "react";
const CartItem = () => {
    const {cartItems,handleRemoveFromCart,handleCartProductQuantity} =useContext(Context);
    return <div className="cart-product">
        {cartItems.map(item=>(
        <div key={item.id} className="cart-prod">
            <div className="img-con">
                <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
            </div>
            <div className="product-dets">
                <div className="name">{item.attributes.title}</div>
                <MdClose className="close-btn" onClick={()=>handleRemoveFromCart(item)}/>
                <div className="quantity">
                    <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                    <span>{item.attributes.quantity}</span>
                    <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                </div>
                <div className="text">
                    <span>{item.attributes.quantity} </span>
                    <span> X </span>
                    <span className="hl"> &#8377;{item.attributes.price}</span>
                    
                </div>
            </div>
        </div>
        ))}
    </div>;
};

export default CartItem;
