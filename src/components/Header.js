import {LOGO_URL} from "../utils/contstants";
import {useState} from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    // local state variable
    const [btnName, setBtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/">
                    <img className="logo" src={LOGO_URL}/>
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
                        <Link to="/about">About us</Link>
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
