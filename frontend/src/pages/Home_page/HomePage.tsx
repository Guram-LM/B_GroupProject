import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { featchAnimals, featchKategori } from "../../store/get/getThunks";
import { Link, useOutletContext } from "react-router-dom";
import styles from "./style.module.css"
import { useconverter } from "../../hook/ConverterHook";
import { addBasket, removeBasket } from "../../store/reduxBasket/ReduxBasket";
import { addWishlist, removeWishlist } from "../../store/redaxwishlist/redaxwishlist";
import SliderComponent from "../../sliderComponent/sliderComponent";
import type { IItems, IReduxUsd } from "../../interface/Interface";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { toast } from "react-toastify";
import { appTheme } from "../../store/light&dark/LigtDarkSlice";



export const HomePage =() => {

    const {animals,error,loading}=useAppSelector(state => state.get)
    const categories = useAppSelector(state => state.get.kategori)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))
        dispatch(featchKategori({ resource: "kategory" }))
    },[dispatch])


    const { rate } = useconverter()
    const [curensy, setCurensy] = useState<"GEL" | "USD" >("GEL")


    const { mode } = useOutletContext<{ mode: "light" | "dark" }>();


    const baskeiItem = useAppSelector(state => state.basket.items)
    const wishlistItem = useAppSelector(state => state.wishlist.items)


    const [showSearch, setShowSearch] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");



    const filteredAnimals = searchTerm.trim()
    ? animals.filter(animal => {
        const matchedCategory = categories.find(cat =>
          cat.kategoryName.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return matchedCategory && animal.categoryId === matchedCategory.id;
      })
    : animals;

   
    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;
    return (
    <div className={`${styles.container} ${mode === "dark" ? styles.dark : styles.light}`}>


    <div className={styles.fixedRightBar}>
      <button onClick={() => setShowSearch(prev => !prev)}>🔍</button>
      <button onClick={() => dispatch(appTheme())}>
        {mode === "dark" ? "☀️" : "🌙"}
      </button>
    </div>
      
      <SliderComponent animals={animals.filter(a => a.img) as IItems[]}/>
      <div className={styles.headerWithSelect}>
        <h1 className={styles.pageHeader}>Our Pets</h1>
        <select value={curensy} onChange={(e) => setCurensy(e.target.value as "GEL" | "USD")} className={styles.customSelect}>
          <option value="GEL">GEL</option>
          <option value="USD">USD</option>
        </select>
      </div>

        

        {showSearch && (
          <input 
            type="text"
            placeholder="მოძებნე კატეგორიის მიხედვით"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            className={styles.searchInput}
            autoFocus 
          />
        )}

        {filteredAnimals.length === 0 ? (
          <p className={styles.notFound}>ცხოველები ამ კატეგორიაში ვერ მოიძებნა</p>
        ) 
        : (<div className={styles.grid}>
          {filteredAnimals.map(item => {
            const priceInUSD = rate ? (Number(item.price) * rate).toFixed(2) : null;

            const isBasket = baskeiItem.some(i => i.id === item.id)
            const isWishlist = wishlistItem.some(i => i.id === item.id)

            return (
              <div key={item.id} className={`${styles.card} ${mode === "dark" ? styles.cardLight : styles.cardDark} ${item.quantity === "0" ? styles.outOfStock : ""}`}>
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
                    <Link className={styles.detailsButton} to={`/animal/${item.id}`} >Details </Link>
                    <div className={styles.icons}>
                      <AiOutlineHeart
                        className={`${styles.icon} ${styles.heart} ${isWishlist ? styles.activeHeart : ""}`}
                        onClick={() => {if (isWishlist) {
                                    dispatch(removeWishlist(item.id!));
                                    toast.info("Removed from wishlist");
                                  } else {
                                    dispatch(addWishlist({
                                    ...item,
                                    quantity: "1",
                                    id: item.id!,
                                    price: curensy === "USD" && priceInUSD ? priceInUSD : item.price,
                                    currency: curensy,
                                  } as IReduxUsd));


                                    toast.success("Added to wishlist");
                                  }
                                }}
                      />
                      <AiOutlineShoppingCart
                        className={`${styles.icon} ${styles.cart} ${isBasket ? styles.activeBasket : ""}`}
                        onClick={() => {if(isBasket) {
                                      dispatch(removeBasket(item.id!));
                                      toast.info("Removed from cart");
                                    } else {
                                      dispatch(addBasket({
                                        ...item,
                                        quantity: "1",
                                        id: item.id!,
                                        price: curensy === "USD" && priceInUSD ? priceInUSD : item.price,
                                        currency: curensy,
                                      } as IReduxUsd));
                                      toast.success("Added to cart");
                                    }

                                  }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>)}
    </div>
  );
};