import "./Header.css"
import { useState } from "react"
import logo from "../../assets/Vector.svg"
import down_arrow from "../../assets/down-arrow.svg"
export default function Header(){
    const [drop, setDrop] = useState(false)
    return(
        <>
            <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>ProVital</h1>
            </div>
            <ul>
                <li className = "border-right">
                    <a>List your practice</a>
                </li>
                <li className = "border-right">
                    <a>For Employers</a>
                </li>
                <li className = "border-right">
                    <a>Courses</a>
                </li>
                <li className = "border-right">
                    <a>Books</a>
                </li>
                <li className = "border-right">
                    <a>Speakers</a>
                </li>
                <li className = "border-right">
                    <a>Doctors</a>
                </li>
                <li onClick={()=>setDrop(!drop)}>
                    <a>Login/Signup</a>
                    <img className="down-arrow" src={down_arrow}></img>
                </li>
                {
                    drop && (<ul className="drop-down">
                        <li className="bottom-border">Doctor 
                            <div className="links ">
                                <a>Signup</a>
                                <a>Login</a>
                            </div>
                        </li>
                        <li>Patients 
                            <div className="links">
                                <a>Signup</a>
                                <a>Login</a>
                            </div>
                        </li>
                    </ul>)
                }
            </ul>
            </nav>
        </>
    )
}