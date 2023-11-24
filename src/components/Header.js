import {LOGO_URL} from "../utils/contstants";
import {useState} from "react";

export const Header = () => {
    // local state variable
    const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
           <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact us</li>
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
