import React from "react";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <div>
        <nav className="navbar">
            <Link to="/" className="nav-brand">README SHOP</Link>
            <div className="nav-shopcart">
                <Link to="/shop"><FaShoppingCart className="shopcart-logo" /></Link>
                {/* <div className="dropdown">
                    <Link to="/editUser" className="dropdown-items"><span>Edit Profile</span></Link>
                    <a href="/logout" className="dropdown-items"><span>Logout</span></a>
                </div> */}
            </div>
        </nav>
        </div>
    );
};

export default Navbar;
