import { Link, Outlet } from "react-router-dom"

export const FrontLeyout =() => {
    return(
        <div>
            <div>
                <nav>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/wishlist"}>Home</Link>
                    <Link to={"/cart"}>Home</Link>
                </nav>
            </div>

            <Outlet/>

            <div>
                <h1>Footer</h1>
            </div>

        </div>

        
    )
}