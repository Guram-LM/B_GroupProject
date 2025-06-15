import { Route, Routes } from "react-router-dom"
import { Deshboard } from "./pages/deshbord/Dashboard"
import { AnimalsDeshboard } from "./pages/AnimalsDeshboard"
import { KategoriDeshboard } from "./pages/kategory/KategoriDeshboaard"
import { AdminLayout } from "./pages/AdminLayot"
import { DetailedPage } from "./pages/detailed/detailedPage"
import { EditdPage } from "./pages/edit/edit"


function App() {
  
  return (
    <Routes>

      <Route path="/" element={<AdminLayout/>}>

        <Route index element={<Deshboard/>} />
        <Route path="animals" element={<AnimalsDeshboard/>} />
        <Route path="kategori" element={<KategoriDeshboard/>} />
        <Route path="detailedPage/:id" element={<DetailedPage/>} />
         <Route path="edit" element={<EditdPage/>} />

      </Route>

    </Routes>
    
  )
}

export default App
