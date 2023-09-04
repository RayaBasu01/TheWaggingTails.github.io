import "./Search.scss";
import {MdClose} from "react-icons/md";
import{TbSearch} from "react-icons/tb";
import prod1 from "../../../assets/products/food-1.webp";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import useFetch from "../../../hooks/fetch";
const Search = ({setshowSearch}) => {

    const [query , setQuery ]=useState("");
    const navigate= useNavigate();
    const onChange= (e)=>{
        setQuery(e.target.value);
    }

    let {data}=useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`);

    if(!query.length){
        data = null ;
    }

    return (
        <div className="search-modal">
            <div className="form-field">
                <TbSearch className="search-ic"/>
                <input type="text" autoFocus placeholder= "Search Products" value={query} onChange={onChange}/>
                <MdClose className="close-btn" onClick={()=>setshowSearch(false)}/>
            </div>

            <div className="search-res-con">
                <div className="search-result">
                    {data?.data?.map(item=>(
                        <div key={item.id} className="search-item" onClick={()=>{
                            navigate("/product/"+item.id);
                            setshowSearch(false)
                        }}>
                            <div className="img-con">
                                <img src={process.env.REACT_APP_URL + item.attributes.img.data[0].attributes.url} alt="" />
                            </div>
                            <div className="prod-dets">
                                <div className="name">{item.attributes.title}</div>
                                <div className="description">{item.attributes.desc}</div>
                            </div>
                       </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Search;
