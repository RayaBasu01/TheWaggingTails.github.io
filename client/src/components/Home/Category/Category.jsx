import "./Category.scss";
import {useNavigate} from "react-router-dom";
//import cat1 from "../../../assets/category/cat-1.jpg";
const Category = ({ categories }) => {
    const navigate = useNavigate();
    return (
        <div className="shop-category">
        <div className="category-content">
            {categories?.data?.map((item)=>(
                <div  key={item.id} className="category-imgs" onClick={()=> navigate(`/category/${item.id}`)}>
                    <img src={process.env.REACT_APP_URL + item.attributes.img.data.attributes.url} alt="" />
                </div>
            ))}
            
        </div>
    </div>
    );
};

export default Category;
