import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimalForm } from "../formElements/formElementsAnimals";
import type { IAnimals } from "../interface/Interface";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { postThunk } from "../store/post/postThunks";
import { featchKategori } from "../store/get/getThunks";

export const AnimalsDeshboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.post);

  const {kategori} = useAppSelector((state) => state.get)

      useEffect(() => {
      dispatch(featchKategori({resource:"kategory"}))
  
  },[])

  const [value, setvalue] = useState<IAnimals>({
    img: "",
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
    isPopular: false,
    categoryId: ""
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement
    setvalue((prev) => ({ 
      ...prev, [name]: type === "checkbox" ? checked: value
    }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action = await dispatch(postThunk({ resource: "animals", formData: value }));

    if (postThunk.fulfilled.match(action)) {
      alert("Successful");
      setvalue({ 
        img: "",
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
        isPopular: false,
        categoryId: ""
      });
    } else {
      alert("Rejected: " + (action.payload || "დაფიქსირდა შეცდომა"));
    }
  };

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  return <AnimalForm value={value} onChange={onChange} onSubmit={onSubmit} categories={kategori}/>;
};
