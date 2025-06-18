import { Route, Routes } from "react-router-dom"
import { FrontLeyout } from "./pages/FrontLeyout/FrontLeyout"
import { HomePage } from "./pages/Home_page/HomePage"
import { Wishlist } from "./pages/Wishlist/Wishlist"
import { Cart } from "./pages/Cart/Cart"
import  Details  from "./pages/Details/AnimalDetailsPage"
import CheckoutPage from "./pages/Checkout/CheckoutPage";



function App() {
 

  return (
  
      <Routes>
      <Route path="/" element={<FrontLeyout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="animal/:id" element={<Details />} />
      <Route path="checkout" element={<CheckoutPage />} /> {}

      </Route>
    </Routes>
  
  )
}

export default App
