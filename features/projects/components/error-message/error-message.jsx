import styles from "./error-message.module.scss";

const ErrorMessage = ({ onTryAgain }) => {
  return (
    <div className={styles.errorMessageContainer}>
      <div className={styles.flex}>
        <svg
          preserveAspectRatio="xMidYMid meet"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.warningIcon}
        >
          <path
            d="M9.99999 6.66663V9.99996M9.99999 13.3333H10.0083M18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 9.99999 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z"
            stroke="#D92D20"
            stroke-width="1.66667"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <p>There was a problem while loading the project data</p>
      </div>
      <div
        className={`${styles.flex} ${styles.tryAgainBtn}`}
        onClick={onTryAgain}
      >
        <p>Try again</p>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.16669 7.00008H12.8334M12.8334 7.00008L7.00002 1.16675M12.8334 7.00008L7.00002 12.8334"
            stroke="#B42318"
            stroke-width="1.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
};

export default ErrorMessage;
