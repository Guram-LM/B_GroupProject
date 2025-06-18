import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { addBasket } from "../../store/reduxBasket/ReduxBasket";
import { addWishlist } from "../../store/redaxwishlist/redaxwishlist";
import styles from "./animalDetails.module.css";

const AnimalDetailsPage = () => {
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
        <p><strong>Price:</strong> {animal.price} GEL</p>
        <p><strong>Quantity:</strong> {animal.quantity}</p>
        <p><strong>Category:</strong> {animal.category}</p>
        <p><strong>Description:</strong> {animal.description}</p>

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

export default AnimalDetailsPage;
