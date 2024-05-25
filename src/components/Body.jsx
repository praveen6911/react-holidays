import React from "react";
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
        <button>Search</button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.data.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
