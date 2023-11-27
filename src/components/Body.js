import {useEffect, useState} from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {CDN_URL, OFFER_NEAR_BY_BASE_URL} from "../utils/contstants";

const Body = () => {
    // local state variable
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [offerCarousel, setOfferCarousel] = useState([]);
    const [foodCarousel, setFoodCarousel] = useState([]);
    const [userName, setUserName] = useState("");
    console.log("Body Rendered");
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const API_URL = 'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9165757&lng=77.6101163&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING';
        const data = await fetch(API_URL);
        const response = await data.json();
        console.log(response);
        const offerCarousel = response?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
        const foodCarousel = response?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
        console.log(foodCarousel);
        const restaurantListData = response?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setUserName("Swagat")
        setListOfRestaurant(restaurantListData);
        setFilteredRestaurant(restaurantListData);
        setOfferCarousel(offerCarousel);
        setFoodCarousel(foodCarousel);
    }

    const handleSearch = () => {
        const filteredRestaurant =
            listOfRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            || res.info.cuisines.some((dish) => dish.toLowerCase().includes(searchText.toLowerCase())));
        setFilteredRestaurant(filteredRestaurant);
    }

    const handelKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    const handelScroll = (direction, containerName) => {
        const container = containerName === "offer-carousel-container" ?
            document.getElementById("offer-carousel-container")
        : document.getElementById("food-carousel-container");
        const scrollAmount = containerName === "offer-carousel-container" ? 350 : 200;
        if(direction === "left") {
            container.scrollLeft -= scrollAmount;
        } else if (direction === "right") {
            container.scrollLeft += scrollAmount;
        }
    }

    // Conditional Rendering
    return listOfRestaurant.length === 0 ? (<Shimmer/>) : (
        <div className="body">
            <div className="offer-carousel">
               <h2>Best offer for you</h2>
                <div className="offer-slide-arrows">
                   <button className="scroll-button" onClick={() => handelScroll("left", "offer-carousel-container")}>
                       &larr;
                   </button>
                    <button className="scroll-button" onClick={() => handelScroll("right", "offer-carousel-container")}>
                        &rarr;
                    </button>
                </div>
                <div className="offer-carousel">
                    <div id="offer-carousel-container" className="offer-carousel-container">
                        {offerCarousel.map((offer) => (
                            <div key={offer.imageId} className="offer-carousel-item">
                                <img src={OFFER_NEAR_BY_BASE_URL + offer.imageId} alt={`Food ${offer.id}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="food-carousel">
                <h2>{userName + ", what's on your mind"}</h2>
                <div className="food-slide-arrows">
                    <button className="scroll-button" onClick={() => handelScroll("left", "food-carousel-container")}>
                        &larr;
                    </button>
                    <button className="scroll-button" onClick={() => handelScroll("right", "food-carousel-container")}>
                        &rarr;
                    </button>
                </div>
                <div className="food-carousel">
                    <div id="food-carousel-container" className="food-carousel-container">
                        {foodCarousel.map((offer) => (
                            <div key={offer.imageId} className="food-carousel-item">
                                <img src={CDN_URL + offer.imageId} alt={`Food ${offer.id}`}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <h2>Restaurants with online food delivery in Bangalore</h2>
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search for restaurants and food" value={searchText}
                           onChange={(e) => {
                               setSearchText(e.target.value)
                           }}
                           onKeyDown={handelKeyDown}
                    />
                    <button className="search-button" onClick={handleSearch}
                    >Search
                    </button>
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
