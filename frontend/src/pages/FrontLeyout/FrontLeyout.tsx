import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/hook";
import styles from "./style.module.css";

export const FrontLeyout = () => {
  const caunt = useAppSelector(state => state.basket.items.length);
  const wishlistcount = useAppSelector(state => state.wishlist.items.length);
  const { pathname: path } = useLocation();

  const getLinkClass = (to: string) =>
    path === to ? `${styles.link} ${styles.active}` : styles.link;

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>PetShop</h1>
        <nav className={styles.nav}>
          <Link to="/" className={getLinkClass("/")}>Home</Link>
          <Link to="/wishlist" className={getLinkClass("/wishlist")}>
            Wishlist {wishlistcount > 0 &&  <p className={styles.wishlist}> {wishlistcount} </p>}
          </Link>
          <Link to="/cart" className={getLinkClass("/cart")}>
            Cart {caunt > 0 && <p className={styles.corbCount}> {caunt} </p> }
          </Link>
        </nav>
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>About PetShop</h2>
          <p>
            We're dedicated to connecting loving homes with wonderful pets.
            Our mission is to ensure every pet finds a caring family.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>Quick Link</h2>
          <div className={styles.footerList}>
            <Link to="/" className={getLinkClass("/")}>Home</Link>
            <Link to="/wishlist" className={getLinkClass("/wishlist")}>Wishlist</Link>
            <Link to="/cart" className={getLinkClass("/cart")}>Cart</Link>
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
    </div>
  );
};
