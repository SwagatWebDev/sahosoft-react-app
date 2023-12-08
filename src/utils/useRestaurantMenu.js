import {useEffect, useState} from "react";
import {RES_MENU_API_URL} from "./contstants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API_URL + resId);
        const response = await data.json();
        console.log(response);
        setResInfo(response.data);
    };
    return resInfo;
}

export default useRestaurantMenu;
