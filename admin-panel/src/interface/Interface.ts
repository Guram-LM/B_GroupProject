export interface IAnimals {
    name: string;
    description: string;
    weight: string;
    height: string;
    color: string;
    age: string;
    price: string;
    quantity: string;
    gender: "male" | "female";
    vaccinated: "yes" | "no";
    microchipped: "yes" | "no"; 
}

export interface Ikategory {
    kategory: string,
    description: string
}

// Thunk პარამეტრები
export interface IPostProps {
  resource: string
  formData: IAnimals
}

export interface IResource{
    resource: string
}





export interface IRowDataAnimals {
    id: string,
    data: IAnimals
}
export interface IRowDataKategory {
    id: string,
    data: Ikategory
}