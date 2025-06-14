import { Addbutton, AnimalsForm, ButtonWrapper, Cancelbutton } from "./StyledInputs";

export const AnimalForm = ({value, onChange, onSubmit}) => {
  return (
    <AnimalsForm onSubmit={onSubmit}>
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


        <ButtonWrapper>
                <Addbutton>Add</Addbutton>
                <Cancelbutton>Cancel</Cancelbutton>
        </ButtonWrapper>


    </AnimalsForm>
  );
}
