import {RES_MENU_API_URL} from "../utils/contstants";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API_URL + resId);
        const response = await data.json();
        console.log(response);
        setResInfo(response.data);
    };

    if (resInfo === null) return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards && itemCards.map((item) => (
                        <li>
                            {item.card.info.name} - {" Rs."}
                            {item.card.info.price/100 || item.card.info.defaultPrice/100}
                        </li>
                    ))
                }
            </ul>
            <p>{!itemCards ? "No Menu Found": ""}</p>
        </div>
    );
};

export default RestaurantMenu;
