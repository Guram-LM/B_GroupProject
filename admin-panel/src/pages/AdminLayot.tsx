import { NavLink, Outlet } from "react-router-dom"

export const AdminLayout = () =>{


    return(
        <>
        <nav>
            <NavLink to={"/"} >Deshboard</NavLink>
            <NavLink to={"/animals"} >AnimalsDeshboard</NavLink>
            <NavLink to={"/kategori"} >KategoriDeshboard</NavLink>
        </nav>

        <Outlet/>
        </>
    )
}