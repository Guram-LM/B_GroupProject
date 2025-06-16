import { useState } from "react"
import { KategoryForm } from "../../formElements/formElementsCategory"
import { FormPageStyle } from "../../formElements/StyledInputs"
import { updateThunk } from "../../store/update/UpdateThunks"
import { Back } from "../detailed/Style"
import type { Ikategory, IkategoryId } from "../../interface/Interface"
import { useLocation, useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../store/hook"
import { featchKategori } from "../../store/get/getThunks"

export const EditCategory = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { item } = location.state as { item: IkategoryId }


  const [kategoryData, setkategoryData] = useState<Ikategory>({
    ...item,
  })

    const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target 
      setkategoryData((prev) => ({ 
        ...prev, [name]: value
      }));
    };


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    dispatch(updateThunk({
        id: item.id,
        resource: "kategory",
        updatedData: kategoryData,
      })
    )
      .unwrap()
      
      .then(() => navigate("/category"))
      .catch((err) => {
        console.error("Update Error:", err)
      })
  }
 
  return (
    <FormPageStyle>
        <Back to= {"/category"}>&larr; Back Categories</Back>
        <KategoryForm value={kategoryData} onChange={onChange} onSubmit={onSubmit} />
    </FormPageStyle>
  )
}
