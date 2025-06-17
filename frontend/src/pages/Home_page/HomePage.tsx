import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { featchAnimals } from "../../store/get/getThunks";
import { Link } from "react-router-dom";
import styles from "./style.module.css"
import korb from "../../assets/korb.png"
import herz from "../../assets/herz.png"
import { useconverter } from "../../hook/ConverterHook";
import { addBasket } from "../../store/reduxBasket/ReduxBasket";
import { addWishlist } from "../../store/redaxwishlist/redaxwishlist";
import SliderComponent from "../../sliderComponent/sliderComponent";


export const HomePage =() => {

    const {animals,error,loading}=useAppSelector(state => state.get)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))
    },[])

// ვალიტის კონვერტაცია
    const { rate } = useconverter()
    const [curensy, setCurensy] = useState<"GEL" | "USD" >("GEL")
// ვალიტის კონვერტაცია


    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
        <div className={styles.container}>

          <SliderComponent/>
      <div>
        <h1>Our Pets</h1>
        <select value={curensy} onChange={(e) => setCurensy(e.target.value as "GEL" | "USD")}>
          <option value="GEL">GEL</option>
          <option value="USD">USD</option>
        </select>
      </div>

      <div className={styles.grid}>
        {animals.map(item => {
          const priceInUSD = rate ? (Number(item.price) * rate).toFixed(2) : null;

          return (
            <div key={item.id} className={`${styles.card} ${item.quantity === "0" ? styles.outOfStock : ""}`}>
              <div className={styles.imageBox}>
                <img src={item.img} alt={item.name} />
                {item.quantity === "0" && <p className={styles.outOfStockText}>Out of Stock</p>}
              </div>

              <div className={styles.detailsSeqtion}>
                <div className={styles.details}>
                  <p>{item.name}</p>
                  {curensy === "USD" && rate
                    ? <p>USD {priceInUSD}</p>
                    : <p>GEL {item.price}</p>
                  }
                </div>

                <div className={styles.actions}>
                  <Link className={styles.detailsButton} to="/">Details</Link>
                  <div className={styles.icons}>
                    <img src={herz} alt="heart" onClick={() => dispatch(addWishlist({...item, id: item.id!}))} />
                    <img src={korb} alt="cart" onClick={() => {
                                                            dispatch(addBasket({ ...item, id: item.id! })); 
                                                        }}/>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};