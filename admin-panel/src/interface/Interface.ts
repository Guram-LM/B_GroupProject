export interface IData {
    name: string,
    age: string,
    price: number | string
}

// Thunk პარამეტრები
export interface IPostProps {
  resource: string
  formData: IData
}

export interface IResource{
    resource: string
}





export interface IRowData {
    id: string,
    data: IData
}