import {LOGO_URL} from "../utils/contstants";
import {useEffect, useState} from "react";

export const Header = () => {
    // local state variable
    const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src={LOGO_URL}/>
            <div className="app-name">Foodies</div>
        </div>
        <div className="nav-items">
            <ul>
                <li>Offers</li>
                <li>Help</li>
                <li>About us</li>
                <li>Carts</li>
                <button className="login" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>
                    {btnName}
                </button>
            </ul>
        </div>
      </div>
    )
}

export default Header;
