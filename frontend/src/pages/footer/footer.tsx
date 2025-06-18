import { NavLink } from "react-router-dom";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSection}>
        <h2 className={styles.footerHeading}>About PetShop</h2>
        <p>
          We're dedicated to connecting <br />
          loving homes with wonderful pets.<br />
          Our mission is to ensure every pet <br />
          finds a caring family.
        </p>
      </div>

      <div className={styles.footerSection}>
        <h2 className={styles.footerHeading}>Quick Link</h2>
        <div className={styles.footerList}>
          <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
          <NavLink to="/wishlist" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Wishlist</NavLink>
          <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Cart</NavLink>
        </div>
      </div>

      <div className={styles.footerSection}>
        <h2 className={styles.footerHeading}>Contact Us</h2>
        <div className={styles.footerList}>
          <p>Email: info@petshop.com</p>
          <p>Phone: +(123) 456 789</p>
          <p>Address: 123 Pet Street, Animalville</p>
        </div>
      </div>
    </footer>
  );
};