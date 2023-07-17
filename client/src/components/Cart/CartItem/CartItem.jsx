import "./CartItem.scss";
import {MdClose} from "react-icons/md";
import prod1 from "../../../assets/products/food-1.webp"
const CartItem = () => {
    return <div className="cart-product">
        <div className="cart-prod">
            <div className="img-con">
                <img src={prod1}alt="" />
            </div>
            <div className="product-dets">
                <div className="name">Food</div>
                <MdClose className="close-btn" />
                <div className="quantity">
                    <span>-</span>
                    <span>1</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3 </span>
                    <span> X </span>
                    <span className="hl"> &#8377;499</span>
                    
                </div>
            </div>
        </div>
    </div>;
};

export default CartItem;
