import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimalForm } from "../formElements/formElementsAnimals"
import type { IAnimals } from "../interface/Interface";
import { useDispatch, useSelector } from "react-redux";
import { postThunk } from "../store/post/postThunks";


export const AnimalsDeshboard = () => {
    
    const dispatch = useDispatch()

    const {loading, error} = useSelector(state => state.post)

    const [value, setvalue] = useState<IAnimals>({
    name: "",
    description: "",
    weight: "",
    height: "",
    color: "",
    age: "",
    price: "",
    quantity: "",
    gender: "male",
    vaccinated: "yes",
    microchipped: "yes",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target
    setvalue((prev)=>({...prev, [name]:value} ))

  }
    const onSubmit = (e:FormEvent<HTMLFormElement>) =>{
         e.preventDefault()
         const action = dispatch(postThunk({resource:"animals", formData:value}))
         if(postThunk.fulfilled.match(action)){
            alert(" sucseesful ")
            setvalue({
                name: "",
                description: "",
                weight: "",
                height: "",
                color: "",
                age: "",
                price: "",
                quantity: "",
                gender: "male",
                vaccinated: "yes",
                microchipped: "yes",
            })
         } else{
            alert("reject")
         }
    }
    

  if(loading) return <h1>Loading ...</h1>
  if(error) return <h1>{error.message}</h1>
    return(

        
        
        <AnimalForm value={value}onChange={onChange} onSubmit={onSubmit}/>
    )
}