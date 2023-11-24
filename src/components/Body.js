import {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    // local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    console.log("Body Rendered");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(API_URL);
        const response = await data.json();
        const restaurantListData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(restaurantListData);
        setFilteredRestaurant(restaurantListData);
    }
    // Conditional Rendering
    return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search Restaurants..." value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="search-button" onClick={() => {
                        console.log(searchText);
                        console.log(listOfRestaurant);
                        const filteredRestaurantName =
                            listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredRestaurant(filteredRestaurantName);
                    }}
                    >Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = filteredRestaurant.filter((res) => res.info.avgRating >= 4.2);
                    setFilteredRestaurant(filteredList);
                }}>Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
                    ))
                }
            </div>
        </div>
    );
}

export default Body;
