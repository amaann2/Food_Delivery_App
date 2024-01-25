import { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import logo from '../../assets/logo_web.png'
const Navbar = () => {

    //* -------------responsive nabar----------------
    const [navIsOpen, setNavIsOpen] = useState(false);
    const toggleNav = () => {
        setNavIsOpen(!navIsOpen);
    };
    return (
        <>
            <nav className={`${navIsOpen ? "active" : ""}`}>
                <h2 className="logo"><Link to={'/'}> <img src={logo} alt="logo" className="w-16"/></Link></h2>
                <div className="bars">
                    <GiHamburgerMenu onClick={toggleNav} />
                </div>

                <ul className="nav-links">
                   
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/cart" className="flex gap-2 justify-center items-center" >
                            <BsBag className="navbar-icon" />
                            <span>cart</span>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/login">Sign in</Link>
                    </li>


                </ul>


            </nav>
        </>
    );
};

export default Navbar;