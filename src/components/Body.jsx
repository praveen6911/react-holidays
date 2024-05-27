import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { SWIGGY_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [originalList, setOriginalList] = useState([]); 
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const data  = await response.json();
      const restaurants = data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      //storing all the restuarants in originalList
      setOriginalList(restaurants);
      //storing all the restuarants in filteredList
      setFilteredList(restaurants);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    //filtering the originalList based on searchText
    const filteredRestaurants = originalList.filter(
      restaurant => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );

    //if filteredRestaurants is empty then show alert
    if (filteredRestaurants.length === 0) {
      alert("No restaurant found");
      return;
    }

    //updating the filteredList from original list to the filtered list
    setFilteredList(filteredRestaurants);
  };

  const handleFilterToggle = () => {
    //checking the length of filtered list with original list a
    if (filteredList.length === originalList.length) { 
      const topRatedRestaurants = originalList.filter(restaurant => restaurant.info.avgRating > 4.2);
      setFilteredList(topRatedRestaurants);
    } else {
      setFilteredList(originalList);
    }
    console.log(filteredList.length, originalList.length);
  };

  return isLoading ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search for restaurant"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterToggle}>
          {filteredList.length === originalList.length ? "Top Rated" : "Show All"}
        </button>
      </div>

      <div className="restaurant-container">
        {/* mapping the filteredList ( condition is if it is not filtered then the filteredlist will be equal to original list ) with RestaurantCard component */}
        {filteredList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurantData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
