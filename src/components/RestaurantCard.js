import { CDN_URL } from "../utils/contstants";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <img
                className="res-logo w-full h-32 object-cover rounded-t-lg mb-4"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <h3 className="text-xl font-bold mb-2 text-gray-800">{resData.info.name}</h3>
            <h4 className="text-gray-600 mb-2">{resData.info.cuisines.join(', ')}</h4>
            <div className="flex items-center mb-2">
                <span className="text-yellow-500 mr-1">&#9733;</span>
                <span className="text-gray-700">{resData.info.avgRating} stars</span>
            </div>
            <div className="flex items-center mb-2">
                <span className="text-gray-700">Cost for Two:</span>
                <span className="text-green-600 font-bold ml-1">
                    ${resData.info.costForTwo}
                </span>
            </div>
            <div className="flex items-center">
                <span className="text-gray-700">Delivery Time:</span>
                <span className="text-blue-600 font-bold ml-1">
                    {resData.info.sla.deliveryTime} mins
                </span>
            </div>
        </div>
    );
};

export default RestaurantCard;
