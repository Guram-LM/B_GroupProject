import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import styles from "./style.module.css";
import { appTheme } from "../../store/light&dark/LigtDarkSlice";
import "../../index.css"
import { useEffect } from "react";

export const FrontLeyout = () => {
  const caunt = useAppSelector(state => state.basket.items.length);
  const wishlistcount = useAppSelector(state => state.wishlist.items.length);
  const { pathname: path } = useLocation();

  const getLinkClass = (to: string) =>
    path === to ? `${styles.link} ${styles.active}` : styles.link;

  const dispatch = useAppDispatch()
  const mode = useAppSelector(state => state.dark_light.them)
  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

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
        <button onClick={() => dispatch(appTheme())}>{mode === "dark" ? "☀ Light Mode" : "🌙 Dark Mode"}</button>
      </header>



      <main className={`${styles.mainContent} ${mode === "dark" ? styles.dark : styles.light} `}>
      <Outlet context={{ mode }}/>
      </main>


      

       <footer className={styles.footer}>
        <div className={styles.footerSection}>
          <h2 className={styles.footerHeading}>About PetShop</h2>
          <p>
            We're dedicated to connecting <br></br>loving homes with wonderful pets.<br></br>
            Our mission is to ensure every pet <br></br>finds a caring family.
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
