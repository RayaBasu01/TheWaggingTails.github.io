import "./Search.scss";
import {MdClose} from "react-icons/md";
import prod1 from "../../../assets/products/food-1.webp"
const Search = ({setshowSearch}) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" autoFocus placeholder="Search Products" />
                <MdClose className="close-btn" onClick={()=>setshowSearch(false)}/>
            </div>

            <div className="search-res-con">
                <div className="search-result">
                    <div className="search-item">
                        <div className="img-con">
                            <img src={prod1}alt="" />
                        </div>
                        <div className="prod-dets">
                            <div className="name"></div>
                            <div className="description"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
