import "./HeroSection.css"
import Slider from "../Slider/Slider"
import Search from "../Search/Search"
export default function HeroSection(){
    return(
        <>
        <section className="full-section hero">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="heading">Book an appointment with <span className="gradientText">lifestyle medicine</span> experts</h1>
                    <p className="subText">Optimize your lifestyle and reverse chronic diseases.</p>
                </div>
                <div className="hero-search">
                    <Search />
                </div>
            </div>
            <div className="hero-slider">
                <Slider/>
            </div>
        </section>
        <div className="divider">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 38" fill="none" className="divider-svg">
                <path d="M-81.3304 19L1319.18 19" stroke="url(#paint0_linear)" strokeWidth="38"/>
                <defs>
                <linearGradient id="paint0_linear" x1="171.411" y1="-74.56" x2="906.184" y2="256.236" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F0C971"/>
                    <stop offset="1" stopColor="#E5688C"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        </>
    )
}