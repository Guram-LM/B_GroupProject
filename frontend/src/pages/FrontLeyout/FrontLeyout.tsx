import { Link, Outlet } from "react-router-dom"
import { useAppSelector } from "../../store/hook"


export const FrontLeyout =() => {
    const caunt = useAppSelector(state => state.basket.items.length)
    const wishlistcount = useAppSelector(state => state.wishlist.items.length)
    return(
        <div>
            <div>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/wishlist"}>wishlist {wishlistcount > 0 && wishlistcount }</Link>
                    <Link to={"/cart"}>cart  {caunt >0 && caunt} </Link>
                </nav>
            </div>

            <Outlet/>

            <div>
                <h1>Footer</h1>
            </div>

        </div>

        
    )
}