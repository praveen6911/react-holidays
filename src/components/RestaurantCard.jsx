import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const { name, cuisines, avgRating, costForTwoString, cloudinaryImageId } =
    restaurantData.data;

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant-logo"
      />

      <h3 className="restaurant-details">{name}</h3>
      <h4 className="restaurant-details">{avgRating}stars</h4>
      <h4 className="restaurant-details">{costForTwoString}</h4>
      <h4 className="restaurant-details">{cuisines.join(",")}</h4>
    </div>
  );
};

export default RestaurantCard;
