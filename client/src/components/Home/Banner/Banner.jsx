import "./Banner.scss";
import BannerImg from "../../../assets/banner1.png"
const Banner = () => {
    return (
        <div className="banner">
            <div className="content">
                <div className="text-content">
                    <h1>UPTO 30% OFF</h1>
                    <p>Summer sale is here , 
                       let your loving ones wag their
                        tails more joyfully by giving 
                        them toys and more.</p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop now</div>
                    </div>

                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;
