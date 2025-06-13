import "./Search.css"
import search from "../../assets/search.svg"
export default function Search(){
    return(
        <div className="search-box">

        <input className="condition" placeholder="Condition, procedure, speciality...">

        </input>
        <input className="location" placeholder="City, state, or zipcode"></input>
        <input className="insurance" placeholder="Insurance Carrier"></input>
        <button className="search"><img src={search} className="search-icon"/>Find Now</button>
            
        </div>
    )
}