import { NavLink, Outlet } from "react-router-dom"
import {LayoutAdmin } from "../formElements/StyledInputs"

export const AdminLayout = () =>{


    return(
    
            <LayoutAdmin>
                <nav>
                    <NavLink to={"/"} >Deshboard</NavLink>
                    <NavLink to={"/animals"} >AnimalsDeshboard</NavLink>
                    <NavLink to={"/kategori"} >KategoriDeshboard</NavLink>
                </nav>

                <Outlet/>
            </LayoutAdmin>
       
   
    )
}