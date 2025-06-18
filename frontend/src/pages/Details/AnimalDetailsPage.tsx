import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { addBasket } from "../../store/reduxBasket/ReduxBasket";
import { addWishlist } from "../../store/redaxwishlist/redaxwishlist";
import styles from "./animalDetails.module.css";

export const AnimalDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { animals } = useAppSelector(state => state.get);
  const dispatch = useAppDispatch();

  const animal = animals.find(a => a.id === id);

  if (!animal) return <h2>Animal not found</h2>;

  return (
    <div className={styles.container}>
      <img src={animal.img} alt={animal.name} className={styles.image} />
      <div className={styles.info}>
        <h2 className={styles.nameTitle}>{animal.name}</h2>
        <p><strong>description:</strong> {animal.description} </p>
        <p><strong>weight:</strong> {animal.weight} KG</p>
        <p><strong>height:</strong> {animal.height} CM</p>
        <p><strong>color:</strong> {animal.color}</p>
        <p><strong>gender:</strong> {animal.gender}</p>
        <p><strong>vaccinated:</strong> {animal.vaccinated}</p>
        <p><strong>microchipped:</strong> {animal.microchipped}</p>
        <p><strong>age:</strong> {animal.age} year</p>
        <p><strong>Price:</strong> {animal.price} GEL</p>

        <div className={styles.buttons}>
          <button onClick={() => dispatch(addWishlist({...animal, id: animal.id!}))}>
            Add to Wishlist
          </button>
          <button onClick={() => dispatch(addBasket({...animal, id: animal.id!}))}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};


