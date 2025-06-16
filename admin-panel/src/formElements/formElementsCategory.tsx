import type { ChangeEvent, FormEvent } from "react"
import { Addbutton, AnimalsForm, ButtonWrapper, Cancelbutton } from "./StyledInputs"
import type { Ikategory } from "../interface/Interface"

interface KategoryFormProps{
    value: Ikategory
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export const KategoryForm = ({value, onChange, onSubmit}: KategoryFormProps) => {
    return(

        <AnimalsForm onSubmit={onSubmit}>
            <h1>Add New Category</h1>
            <label htmlFor="kategoryName">Kategory Name</label>
            <input type="text" name="kategoryName"  value={value.kategoryName} onChange={onChange}/>
            <label htmlFor="description">Description</label>
            <input type="text" name="description" id="des" value={value.description} onChange={onChange}/>

            <ButtonWrapper>
                <Addbutton>Add</Addbutton>
                <Cancelbutton>Cancel</Cancelbutton>
            </ButtonWrapper>

        </AnimalsForm>
         
    )
}