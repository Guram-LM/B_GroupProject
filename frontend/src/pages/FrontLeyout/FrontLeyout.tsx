import { Link, Outlet } from "react-router-dom"
import { useAppSelector } from "../../store/hook"

export const FrontLeyout =() => {
    const caunt = useAppSelector(state => state.basket.items.length)
    return(
        <div>
            <div>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/wishlist"}>wishlist</Link>
                    <Link to={"/cart"}>cart {caunt} </Link>
                </nav>
            </div>

            <Outlet/>

            <div>
                <h1>Footer</h1>
            </div>

        </div>

        
    )
}