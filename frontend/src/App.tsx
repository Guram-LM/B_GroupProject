import { Route, Routes } from "react-router-dom"
import { FrontLeyout } from "./pages/FrontLeyout/FrontLeyout"
import { HomePage } from "./pages/Home_page/HomePage"
import { Wishlist } from "./pages/Wishlist/Wishlist"
import { Cart } from "./pages/Cart/Cart"
import { AnimalDetailsPage } from "./pages/Details/AnimalDetailsPage"



function App() {
 

  return (
  
      <Routes>
      <Route path="/" element={<FrontLeyout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="animal/:id" element={<AnimalDetailsPage />} />
      </Route>
     </Routes>
  
  )
}

export default App
