import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimalForm } from "../formElements/formElementsAnimals";
import type { IAnimals } from "../interface/Interface";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { postThunk } from "../store/post/postThunks";

export const AnimalsDeshboard = () => {
  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.post);

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

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setvalue((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const action = await dispatch(postThunk({ resource: "animals", formData: value }));

    if (postThunk.fulfilled.match(action)) {
      alert("Successful");
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
      });
    } else {
      alert("Rejected: " + (action.payload || "დაფიქსირდა შეცდომა"));
    }
  };

  if (loading) return <h1>Loading ...</h1>;
  if (error) return <h1>{error}</h1>;

  return <AnimalForm value={value} onChange={onChange} onSubmit={onSubmit} />;
};
