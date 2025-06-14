export interface IAnimals {
    name: string,
    age: string,
    price: number | string
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