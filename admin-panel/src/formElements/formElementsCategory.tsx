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
            <input type="text" name="kategoryName" placeholder="kategoryName" value={value.kategoryName} onChange={onChange}/>
            <input type="text" name="description" placeholder="Description" value={value.description} onChange={onChange}/>

            <ButtonWrapper>
                <Addbutton>Add</Addbutton>
                <Cancelbutton>Cancel</Cancelbutton>
            </ButtonWrapper>

        </AnimalsForm>
         
    )
}