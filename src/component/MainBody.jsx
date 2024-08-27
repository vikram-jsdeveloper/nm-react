import React from "react";
import styles from "./MainBody.module.scss";
import RestaurantCard from "./RestaurantCard";

function MainBody() {
  return (
    <div className={styles.mainBody}>
      <div className={styles.searchBox}>Search</div>
      <div className={styles.restaurantsBox}>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
}

export default MainBody;
