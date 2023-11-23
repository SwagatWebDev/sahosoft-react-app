import {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async() => {
        const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(API_URL);
        const response = await data.json();
        const restaurantListData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurantListData);
    }
    if(listOfRestaurant.length === 0){
        return (<Shimmer/>);
    }
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.4);
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
