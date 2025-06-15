import { Route, Routes } from "react-router-dom"
import { Deshboard } from "./pages/deshbord/Dashboard"
import { AnimalsDeshboard } from "./pages/AnimalsDeshboard"
import { KategoriDeshboard } from "./pages/kategory/KategoriDeshboaard"
import { AdminLayout } from "./pages/AdminLayot"


function App() {
  
  return (
    <Routes>

      <Route path="/" element={<AdminLayout/>}>

        <Route index element={<Deshboard/>} />
        <Route path="animals" element={<AnimalsDeshboard/>} />
        <Route path="kategori" element={<KategoriDeshboard/>} />

      </Route>

    </Routes>
    
  )
}

export default App
