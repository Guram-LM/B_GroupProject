import { Outlet, useNavigate } from "react-router-dom"
import hedImg from "../../assets/log.png"
import { HeaderNav, HeaderTiTle, LayoutAdminPage, LayoutHeaders, LogoutButton, StyledNavLink, TitleImageSector,  } from "./style"

export const AdminLayout = () =>{

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("auth"); 
        navigate("/login"); 
    };


    return(
    
            <LayoutAdminPage>

                <LogoutButton onClick={handleLogout}>logaut</LogoutButton>

                <LayoutHeaders>
                    <HeaderTiTle>

                        <TitleImageSector>
                        <img src={hedImg} alt="" />
                        <h1>Pet Shop Admin Panel</h1>
                        </TitleImageSector>

                        
                        <h3>Manage your pets and categories with elegance</h3>

                    </HeaderTiTle>

                    <HeaderNav>

                        <StyledNavLink to={"/"} >Pats</StyledNavLink>
                        <StyledNavLink to={"category"} >Categories</StyledNavLink>
                        <StyledNavLink to={"/animals"} >Add Pats</StyledNavLink>
                        <StyledNavLink to={"/kategori"} >Add Categories</StyledNavLink>

                    </HeaderNav>
                </LayoutHeaders>
                

                <Outlet/>
            </LayoutAdminPage>
       
   
    )
}