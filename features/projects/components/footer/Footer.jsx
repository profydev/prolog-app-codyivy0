import { version } from "package.json";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer}>
      <p id="version" className={styles.version}>
        Version:{version}
      </p>
      <div id="footerMenuItems" className={styles.footerMenuItems}>
        <a href="#">Docs</a>
        <a href="#">API</a>
        <a href="#">Help</a>
        <a href="#">Community</a>
      </div>
      <img
        id="footerLogo"
        className={styles.logo}
        src="/icons/logo-small.svg"
        alt="Logo"
      />
    </div>
  );
};

export default Footer;
