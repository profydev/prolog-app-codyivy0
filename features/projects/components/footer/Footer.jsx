import { version } from "package.json";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.version}>Version:{version}</p>
      <div className={styles.footerMenuItems}>
        <a href="#">Docs</a>
        <a href="#">API</a>
        <a href="#">Help</a>
        <a href="#">Community</a>
      </div>
      <img className={styles.logo} src="/icons/logo-small.svg" alt="Logo" />
    </div>
  );
};

export default Footer;
