import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
const Body = () => {
  //here this is used to apply the filter on restaurant list and display it on ui
  //this is called array destructuring 
  //actaully usestate is returing an array 
  const [Listofrestaurants, setListofrestaurants] = useState([]);
  // below one is same as above one
  /* const arr=useState(restaurantList);
  const Listofrestaurants=arr[0];
  const setListofrestaurants=arr[1]; */
  // this is basically used for toggling whether the filter is applied or not

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      SWIGGY_API_URL
    );
    const json = await data.json();
    setListofrestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(Listofrestaurants);
  };
  
  

  return (
    <div className="body">
      

      <div className="restaurant-container">
        {Listofrestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.info.id}
              restaurantData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
