import { useLocation, useNavigate } from "react-router-dom"
import { AnimalForm } from "../../formElements/formElementsAnimals"
import type { IAnimals, IItems } from "../../interface/Interface"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { useState } from "react"
import { updateThunk } from "../../store/update/UpdateThunks"

export const EditdPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { item } = location.state as { item: IItems }

    const {kategori} = useAppSelector(state => state.get)

  const [formData, setFormData] = useState<IAnimals>({
    ...item,
  })


  
    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type, checked } = e.target as HTMLInputElement
      setFormData((prev) => ({ 
        ...prev, [name]: type === "checkbox" ? checked: value
      }));
    };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(
      updateThunk({
        id: item.id,
        resource: "animals",
        updatedData: formData,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/") // ან დაბრუნება დეტალურ გვერდზე
      })
      .catch((err) => {
        console.error("Update Error:", err)
      })
  }
  console.log("SENDING DATA:", {
  id: item.id,
  resource: "animals",
  updatedData: formData,
})

console.log("updatedData to be sent:", JSON.stringify({ data: [formData] }, null, 2));
  return (
    <AnimalForm
      value={formData}
      onChange={onChange}
      onSubmit={handleSubmit}
      categories={kategori || []}
    />
  )
}

