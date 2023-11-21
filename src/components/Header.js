import React from "react";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src="https://assets.materialup.com/uploads/d8aacac5-efa3-425f-9922-ceb3748ce96a/preview.png"/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Carts</li>
            </ul>
        </div>
      </div>
    )
}

export default Header;