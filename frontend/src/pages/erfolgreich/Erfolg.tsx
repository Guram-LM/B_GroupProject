import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Erfolg.module.css";

export const ErfolgPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); 

    return () => clearTimeout(timer); 
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.message}>
        თქვენი შესყიდვა წარმატებით განხორციელდა 🎉
        <br />
        მადლობა ნდობისთვის!
      </div>
    </div>
  );
};