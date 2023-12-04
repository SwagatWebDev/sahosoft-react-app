import {LOGO_URL} from "../utils/contstants";
import {useState} from "react";
import {Link} from "react-router-dom";
import RestaurantLogo from "../images/preview.png";

export const Header = () => {
    // local state variable
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={RestaurantLogo}/>
                </Link>
                <div className="app-name">Foodies</div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Offers</li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
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
