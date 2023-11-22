import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import {resList} from "../utils/mockData";

const Body = () => {
    // local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4);
                setListOfRestaurant(filteredList);
            }}>Top Rated Restaurant
            </button>
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;
