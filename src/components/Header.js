import {useContext, useState} from "react";
import { Link } from "react-router-dom";
import LogoImage from "../images/preview.png";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import {useSelector} from "react-redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const {loggedInUser, profilePicture} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className="flex justify-between items-center bg-gradient-to-r from-emerald-200 via-yellow-50 shadow-lg p-4">
            <div className="logo-container flex items-center">
                <Link to="/">
                    <img className="w-24" src={LogoImage} alt="Logo" />
                </Link>
                <div className="ml-4 text-xl font-bold">Foodies</div>
            </div>
            <div className="flex items-center">
                <ul className="flex space-x-4">
                    <li>
                        Online Status: {onlineStatus ? "✅" : "🛑"}
                    </li>
                    <li>Offers</li>
                    <li>
                        <Link to="/help">Help</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="font-bold">
                        <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} />({cartItems.length} items)</Link>
                    </li>
                    <li className="font-bold flex items-center">
                        <img className="w-8 h-7 rounded-full" src={profilePicture} alt="User Logo"/>
                        <span className="ml-2">{loggedInUser}</span>
                    </li>
                    {/*<button className="login" onClick={() => {*/}
                    {/*    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");*/}
                    {/*}}>*/}
                    {/*    {btnName}*/}
                    {/*</button>*/}
                </ul>
            </div>
        </div>
    );
};

export default Header;
