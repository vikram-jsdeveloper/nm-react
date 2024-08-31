import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import styles from "./App.module.scss";
import { LOGO_URL } from "./src/utils/constants";
import MainBody from "./src/component/MainBody";

const AppLayout = () => {
  return (
    <>
      <div className={styles.container}>
        <Header imageSrc={LOGO_URL} />
        <MainBody />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <AppLayout />
  </StrictMode>
);
