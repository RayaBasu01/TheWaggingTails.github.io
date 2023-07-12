import "./Category.scss";
import cat1 from "../../../assets/category/cat-1.jpg";
const Category = () => {
    return (
        <div className="shop-category">
        <div className="category-content">
            <div className="category-imgs">
                <img src={cat1} alt="" />
            </div>
            <div className="category-imgs">
                <img src={cat1} alt="" />
            </div>
            <div className="category-imgs">
                <img src={cat1} alt="" />
            </div>
            <div className="category-imgs">
                <img src={cat1} alt="" />
            </div>
            <div className="category-imgs">
                <img src={cat1} alt="" />
            </div>
        </div>
    </div>
    );
};

export default Category;
