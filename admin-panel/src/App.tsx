import { Route, Routes } from "react-router-dom"
import { Deshboard } from "./pages/deshbord/Dashboard"
import { AnimalsDeshboard } from "./pages/AnimalsDeshboard"
import { KategoriDeshboard } from "./pages/addkategory/KategoriDeshboaard"
import { AdminLayout } from "./pages/layout/AdminLayot"
import { DetailedPage } from "./pages/detailed/detailedPage"
import { EditdPage } from "./pages/edit/edit"
import { CategoryPage } from "./pages/category/CategoryPage"
import { EditCategory } from "./pages/editCategory/EditCategory"
import { Login } from "./pages/login/Login"
import { Validation } from "./pages/login/Isvalid"


function App() {
  
  return (
    <Routes>

      <Route path="/login" element={<Login />} />

      

      <Route path="/" element={
        <Validation>
          <AdminLayout />
        </Validation>
      }>

        <Route index element={<Deshboard/>} />
        <Route path="animals" element={<AnimalsDeshboard/>} />
        <Route path="kategori" element={<KategoriDeshboard/>} />
        <Route path="category" element={<CategoryPage/>} />
        <Route path="detailedPage/:id" element={<DetailedPage/>} />
        <Route path="edit" element={<EditdPage/>} />
        <Route path="editCategory" element={<EditCategory/>} />

      </Route>

    </Routes>
    
  )
}

export default App
