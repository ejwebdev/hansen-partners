import { useState } from "react";
import logo from "../../assets/logo.png";
import "./header.css";

function Header() {
    const refreshPage = () => {
        window.location.href = "";
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Event Listener
    const pageLinks = () => {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
    };

    return (
        <header className="header">
            <div className="header-top">
                <div className="nav-top">
                    <div>
                        <span className="material-symbols-rounded">search</span>
                        <input type="text" placeholder="Search..." />
                    </div>
                    <img
                        src={logo}
                        alt="Julie Hansen Logo"
                        onClick={refreshPage}
                    />
                    <button>Reserve Now</button>
                </div>
            </div>
            <nav className="nav">
                <img src={logo} alt="Julie Hansen Logo" onClick={refreshPage} />
                <ul className={isMenuOpen ? "left-0" : "-left-[200%]"}>
                    <li>
                        <a href="" onClick={pageLinks}>
                            Our Team
                        </a>
                    </li>
                    <li>
                        <a href="" onClick={pageLinks}>
                            Explore Homes
                        </a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a
                            href=""
                            onClick={(e) => {
                                e.preventDefault();
                                toggleDropdown();
                            }}
                        >
                            Discover More
                            <span className="material-symbols-rounded">
                                keyboard_arrow_down
                            </span>
                        </a>
                        <ul
                            className={`dropdown ${
                                isDropdownOpen ? "open" : "hidden"
                            }`}
                        >
                            <li>
                                <a href="" onClick={pageLinks}>
                                    Home Valuation
                                </a>
                            </li>
                            <li>
                                <a href="" onClick={pageLinks}>
                                    Homes Across America
                                </a>
                            </li>
                            <li>
                                <a href="" onClick={pageLinks}>
                                    Our Communities
                                </a>
                            </li>
                            <li>
                                <a href="" onClick={pageLinks}>
                                    Testimonials
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="" onClick={pageLinks}>
                            Contact Us
                        </a>
                    </li>
                    <li>
                        <button>Reserve Now</button>
                    </li>
                </ul>
                <span className="material-symbols-rounded" onClick={toggleMenu}>
                    {isMenuOpen ? "close" : "segment"}
                </span>
            </nav>
        </header>
    );
}

export default Header;
