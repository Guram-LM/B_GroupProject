import { useAppDispatch, useAppSelector } from "../../store/hook"
import { clearWishlist, removeWishlist } from "../../store/redaxwishlist/redaxwishlist"

export const Wishlist =() => {

    const wishlist = useAppSelector(state => state.wishlist.items)
    const dispatch = useAppDispatch()

    return(
        <div>
                    {wishlist.length === 0 ? (
                        <p>Your wishlist is empty</p>
                    ) : (
                        <div>
                            <div>
                                {wishlist.map(item => 
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
                                            <button onClick={() => dispatch(removeWishlist(item.id))}>Remove</button>
                                        </div>
        
                                    </div>
                                )}
                            </div>
        
                            <div>
                                <button onClick={() =>  dispatch(clearWishlist())}>Clear All</button>
                            </div>
        
                        </div>
                    )
                    }
        
                </div>
        
    )
}