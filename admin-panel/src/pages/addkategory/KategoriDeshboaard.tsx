import { useState, type ChangeEvent, type FormEvent } from "react"
import { KategoryForm } from "../../formElements/formElementsCategory"
import type { Ikategory } from "../../interface/Interface"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { postThunk } from "../../store/post/postThunks"
import { Back } from "../detailed/Style"
import { FormPageStyle } from "../../formElements/StyledInputs"

export const KategoriDeshboard = () => {

    const {loading, error} = useAppSelector(state => state.post)

    const dispatch = useAppDispatch()

    const [kategoriValue, setKategoriValue] =useState<Ikategory>({
        kategoryName: "",
        description: ""
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setKategoriValue((prev) => ({
            ...prev, [name]: value
        }))

    }

    const onSubmit = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const action = await dispatch(postThunk({resource: "kategory", formData: kategoriValue}))

        if(postThunk.fulfilled.match(action)){
            alert("Successful");
            setKategoriValue({
                kategoryName: "",
                description: "" 
            })
        } else {
            alert("Rejected: " + (action.payload || "დაფიქსირდა შეცდომა"));
        }

    }


    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;
    return(
        <FormPageStyle>
            <Back to= {"/"}>&larr; Bck to Pets</Back>
            <KategoryForm value={kategoriValue} onChange={onChange} onSubmit={onSubmit} />
        </FormPageStyle>
        
    )
}
