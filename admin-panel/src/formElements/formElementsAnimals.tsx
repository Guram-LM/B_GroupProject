import type { ChangeEvent, FormEvent } from "react";
import type { IAnimals, Ikategory } from "../interface/Interface";
import { Addbutton, AnimalsForm, ButtonWrapper, Cancelbutton } from "./StyledInputs";

interface AnimalFormProps {
  value: IAnimals;
  categories: Ikategory[]
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const AnimalForm = ({value,categories, onChange, onSubmit}: AnimalFormProps) => {
  return (
    <AnimalsForm onSubmit={onSubmit}>
      <input type="text" name="img" placeholder="img" value={value.img} onChange={onChange}/>

      <label htmlFor="categoryId">Category:</label>
      <select name="categoryId" id="categoryId" value={value.categoryId} onChange={onChange}>
        <option value="">Select category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>
            {cat.kategoryName}
          </option>
        ))}
      </select>


      <input type="text" name="name" placeholder="Name" value={value.name} onChange={onChange}/>
      <input type="text" name="description" placeholder="Description" value={value.description} onChange={onChange}/>
      <input type="number" name="weight" placeholder="Weight" value={value.weight} onChange={onChange}/>
      <input type="number" name="height" placeholder="Height"value={value.height} onChange={onChange} />
      <input type="text" name="color" placeholder="Color"value={value.color} onChange={onChange} />
      <input type="number" name="age" placeholder="Age" value={value.age} onChange={onChange}/>
      <input type="number" name="price" placeholder="Price" value={value.price} onChange={onChange}/>
      <input type="number" name="quantity" placeholder="Quantity" value={value.quantity} onChange={onChange}/>


      <label htmlFor="gender">Gender:</label>
        <select name="gender" id="gender" value={value.gender} onChange={onChange}>
          <option value="male">Male</option>
          <option value="female">Female</option>
      </select>
      

      <label htmlFor="vaccinated">Vaccinated:</label>
        <select name="vaccinated" id="vaccinated"value={value.vaccinated} onChange={onChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select>
      

      <label htmlFor="microchipped">Microchipped:</label>
        <select name="microchipped" id="microchipped"value={value.microchipped} onChange={onChange}>
          <option value="yes">Yes</option>
          <option value="no">No</option>
      </select>


      <label> 
        <input type="checkbox" name="isPopular" checked={value.isPopular} onChange={onChange} /> Popular
      </label>


        <ButtonWrapper>
          <Addbutton>Add</Addbutton>
          <Cancelbutton>Cancel</Cancelbutton>
        </ButtonWrapper>


    </AnimalsForm>
  );
}
