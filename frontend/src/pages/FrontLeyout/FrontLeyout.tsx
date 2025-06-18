
import styles from "./style.module.css"
import "../../index.css";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { useAppSelector } from "../../store/hook";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const FrontLayout = () => {
  const mode = useAppSelector((state) => state.dark_light.them);

  useEffect(() => {
    document.body.className = mode;
  }, [mode]);

  return (
    <div className={styles.container}>
      <Header />
      <main className={`${styles.mainContent} ${mode === "dark" ? styles.dark : styles.light}`}>
        <Outlet context={{ mode }} />
      </main>
      <Footer />
    </div>
  );
};
