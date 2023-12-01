import styles from "./loading-spinner.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div id="loadingRing" className={styles.ldsring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
