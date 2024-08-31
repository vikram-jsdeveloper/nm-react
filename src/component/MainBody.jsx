import React, { useEffect, useState } from "react";
//import RES_LIST from "../utils/mockData";
import styles from "./MainBody.module.scss";
import MainBodySkeleton from "./MainBodySkeleton";
import RestaurantCard from "./RestaurantCard";

function MainBody() {
  //Normal JS normal

  // State Variable - Super Powerful variable
  const [resList, setResList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const jsonData = await data.json();
      console.log(jsonData);
      setResList(
        // Optional Chaining
        jsonData.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    };

    fetchData();
  }, []);

  const filterConst = () => {
    const filterItems = resList.filter((res) => res.info.avgRating >= 4.6);

    // Sorting function
    // const copyFilterList = [...filterItems];
    // copyFilterList.sort((r1, r2) =>
    //   r1.info.avgRating < r2.info.avgRating
    //     ? 1
    //     : r1.info.avgRating > r2.info.avgRating
    //     ? -1
    //     : 0
    // );

    setResList(filterItems);
  };

  if (resList.length === 0) {
    return <MainBodySkeleton />;
  }

  return (
    <div className={styles.mainBody}>
      <div className={styles.FilterBoxContainer}>
        <div>Search</div>
        <div className={styles.filter}>
          <button className={styles.fitlerBtn} onClick={filterConst}>
            Top rated Restaurants
          </button>
        </div>
      </div>

      <div className={styles.restaurantsBox}>
        {resList.map((data) => {
          return <RestaurantCard key={data.info.id} resData={data} />;
        })}
      </div>
    </div>
  );
}

export default MainBody;
