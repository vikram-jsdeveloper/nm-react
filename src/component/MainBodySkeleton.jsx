import styles from "./MainBodySkeleton.module.module.scss";
const MainBodySkeleton = () => {
  return (
    <>
      <div className={styles.upperBox}></div>
      <div className={styles.mainBox}>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
        <div className={styles.cards}></div>
      </div>
    </>
  );
};

export default MainBodySkeleton;
