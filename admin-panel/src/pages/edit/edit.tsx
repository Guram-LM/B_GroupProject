import { AnimalForm } from "../../formElements/formElementsAnimals"



export const EditdPage =() => {
    return(
        <AnimalForm  value={value} categories={categories}onSubmit={onSubmit} onChange={onChange}  />
    )

    
}

