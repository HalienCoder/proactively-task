import "./Header.css"
import { useState, useEffect } from "react"
import logo from "../../assets/Vector.svg"
import down_arrow from "../../assets/down-arrow.svg"

export default function Header() {
    const [drop, setDrop] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        document.body.classList.toggle("menu-open", mobileMenu)
    }, [mobileMenu])

    return (
        <nav>
            <div className="logo">
                <img src={logo} alt="Logo" />
                <h1>ProVital</h1>
            </div>

            {/* Desktop Navigation */}
            <ul className="desktop-nav">
                <li className="border-right"><a href="#">List your practice</a></li>
                <li className="border-right"><a href="#">For Employers</a></li>
                <li className="border-right"><a href="#">Courses</a></li>
                <li className="border-right"><a href="#">Books</a></li>
                <li className="border-right"><a href="#">Speakers</a></li>
                <li className="border-right"><a href="#">Doctors</a></li>

                <li onClick={() => setDrop(!drop)} className="dropdown-parent">
                    <a href="#">Login/Signup</a>
                    <img className="down-arrow" src={down_arrow} alt="Dropdown arrow" />
                    {
                        drop && (
                            <ul className="drop-down">
                                <li className="bottom-border">
                                    Doctor
                                    <div className="links">
                                        <a href="#">Signup</a>
                                        <a href="#">Login</a>
                                    </div>
                                </li>
                                <li>
                                    Patients
                                    <div className="links">
                                        <a href="#">Signup</a>
                                        <a href="#">Login</a>
                                    </div>
                                </li>
                            </ul>
                        )
                    }
                </li>
            </ul>
            
            <button
                className="mobile-menu-btn"
                onClick={() => setMobileMenu(!mobileMenu)}
                aria-label="Toggle mobile menu"
            >
                <span className={`hamburger ${mobileMenu ? 'active' : ''}`}></span>
                <span className={`hamburger ${mobileMenu ? 'active' : ''}`}></span>
                <span className={`hamburger ${mobileMenu ? 'active' : ''}`}></span>
            </button>

            {mobileMenu && (
                <div className="mobile-menu-overlay" onClick={() => setMobileMenu(false)}>
                    <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '1rem 1.5rem',
                            borderBottom: '1px solid #EAEAEA'
                        }}>
                        </div>
                        <div className="mobile-login-section">
                            <div className="login-box">
                                <div className="login-category">
                                    <span>Doctor</span>
                                    <div className="login-links">
                                        <a href="#">Login</a>
                                        <a href="#">Sign up</a>
                                    </div>
                                </div>
                                <div className="login-category">
                                    <span>Patients</span>
                                    <div className="login-links">
                                        <a href="#">Login</a>
                                        <a href="#">Sign up</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div className="mobile-menu-items">
                            <a href="#" className="mobile-menu-item">Doctors</a>
                            <a href="#" className="mobile-menu-item">List your practice</a>
                            <a href="#" className="mobile-menu-item">For Employers</a>
                            <a href="#" className="mobile-menu-item">Courses</a>
                            <a href="#" className="mobile-menu-item">Books</a>
                            <a href="#" className="mobile-menu-item">Speakers</a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    )
}