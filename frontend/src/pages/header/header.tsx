import { NavLink, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import styles from "./header.module.css";
import { appTheme } from "../../store/light&dark/LigtDarkSlice";

export const Header = () => {
  const caunt = useAppSelector(state => state.basket.items.length);
  const wishlistcount = useAppSelector(state => state.wishlist.items.length);
  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.dark_light.them)


  const location = useLocation();
  const isHomePage = location.pathname === "/"

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>PetShop</h1>
      <nav className={styles.nav}>
        <NavLink to="/" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>Home</NavLink>
        <NavLink to="/wishlist" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Wishlist {wishlistcount > 0 && <p className={styles.wishlist}>{wishlistcount}</p>}
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? `${styles.link} ${styles.active}` : styles.link}>
          Cart {caunt > 0 && <p className={styles.corbCount}>{caunt}</p>}
        </NavLink>
      </nav>
      {!isHomePage && <button onClick={() => dispatch(appTheme())}>
              {mode === "dark" ? "☀️" : "🌙"}
            </button>}
    </header>
  );
};

