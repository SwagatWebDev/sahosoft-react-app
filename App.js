import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header Component
 * - Logo
 * - Nav Items(Home, About us, Carts etc)
 * 
 * Body Component
 * - Search
 * - Restaurant Container
 * - Restaurant Cards
 * 
 * Footer Component
 * - Copyrights
 * - Links
 * - Address
 * - Contacts
 */

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

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
            className="res-logo"
            alt= "res-logo"
            src= "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/l7xlzfeh626mnmhecyy4"
            />
            <h3>Meghana Foods</h3>
            <h4>Biriyani, North Indian and Asian</h4>
            <h4>4.3 Star</h4>
            <h4>20 Mins</h4>
        </div>
    )
}

const Body = () => {
    return (
    <div className="body">
     <div className="search">Search</div>
     <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
     </div>
    </div>
    );
}

const AppLayout = () => {
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);