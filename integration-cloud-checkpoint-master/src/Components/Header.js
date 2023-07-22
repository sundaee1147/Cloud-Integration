import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>Airbnb Disciples</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Beds</a></li>
                    <li><a href="/">Breakfast</a></li>
                    <li><a href="/">Faq</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button">Login</button>
            </div>

        </div>
    );
}

export default Header;