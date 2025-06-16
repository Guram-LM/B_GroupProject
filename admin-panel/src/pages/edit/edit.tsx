import { useLocation, useNavigate } from "react-router-dom"
import { AnimalForm } from "../../formElements/formElementsAnimals"
import type { IAnimals, IItems } from "../../interface/Interface"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { useState } from "react"
import { updateThunk } from "../../store/update/UpdateThunks"
import { FormPageStyle } from "../../formElements/StyledInputs"
import { Back } from "../detailed/Style"

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

    dispatch(updateThunk({
        id: item.id,
        resource: "animals",
        updatedData: formData,
      })
    )
      .unwrap()
      .then(() => {
        navigate("/") 
      })
      .catch((err) => {
        console.error("Update Error:", err)
      })
  }
 
  return (

    <FormPageStyle>
      <Back to= {"/"}>&larr; Bck to Pets</Back>
      <AnimalForm value={formData} onChange={onChange} onSubmit={handleSubmit} categories={kategori || []} />
    </FormPageStyle>
  )
}

