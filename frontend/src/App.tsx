import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home_page/HomePage"
import { Wishlist } from "./pages/Wishlist/Wishlist"
import { Cart } from "./pages/Cart/Cart"
import { AnimalDetailsPage } from "./pages/Details/AnimalDetailsPage"
import { FrontLayout } from "./pages/FrontLeyout/FrontLeyout"
import { ToastContainer } from "react-toastify"
import { useAppSelector } from "./store/hook"
import { CheckoutPage } from "./pages/CheckoutPage/CheckoutPage"
import { ErfolgPage } from "./pages/erfolgreich/Erfolg"



function App() {

  const  mode  = useAppSelector(state => state.dark_light.them)
 
  return (
  <>
    <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme={mode}
      />
 
      <Routes>
      <Route path="/" element={<FrontLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="wishlist" element={<Wishlist/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="animal/:id" element={<AnimalDetailsPage />} />
      <Route path="checkout" element={<CheckoutPage />} />
      <Route path="erfolgPage" element={<ErfolgPage />} />
      </Route>
     </Routes>
   </>
  )
}

export default App
