import "./Product.scss";
import prod1 from "../../../assets/products/food-1.webp"
const Product = () => {
    return (
        <div className="product-card">
            <div className="thumbnail">
                <img src={prod1} alt="" />
            </div>
            <div className="product-details">
                <div className="product-name">Product</div>
                <div className="product-price"> &#8377; 499</div>
            </div>
        </div>
    );
};

export default Product;
