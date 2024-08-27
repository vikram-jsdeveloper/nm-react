import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import styles from "./App.module.scss";

const AppLayout = () => {
  return (
    <div className={styles.container}>
      <Header
        imageSrc={
          "https://cdn3.iconfinder.com/data/icons/street-food-and-food-trucker-1/64/meat-ball-food-sausage-barbecue-64.png"
        }
      />
    </div>
  );
};

<StrictMode>
  <AppLayout />
</StrictMode>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
