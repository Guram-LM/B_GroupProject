
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { clearBaskit, removeBasket } from "../../store/reduxBasket/ReduxBasket"

export const Cart =() => {

   
const corbItem = useAppSelector(state => state.basket.items)
   
   const dispatch = useAppDispatch()

    return(
        <div>
            {corbItem.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div>
                    <div>
                        {corbItem.map(item => 
                            <div key={item.id}>
                                <div>

                                    <div>
                                        <img src={item.img} alt="" />
                                    </div>

                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.price}</p>
                                    </div>

                                </div>

                                <div>
                                    <button>Buy Now</button>
                                    <button onClick={() => dispatch(removeBasket(item.id))}>Remove</button>
                                </div>

                            </div>
                        )}
                    </div>

                    <div>
                        <button onClick={() =>  dispatch(clearBaskit())}>Clear All</button>
                    </div>

                </div>
            )
            }

        </div>
    )
}