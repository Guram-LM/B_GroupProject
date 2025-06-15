import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { featchAnimals, featchKategori } from "../../store/get/getThunks"
import { CardContent, CardWrapper, DeshbordStyle, GrirWrapper, ImgWrapper, PopulatStile } from "./style"

export const Deshboard = () => {

    const {animals,kategori, loading, error} = useAppSelector(state => state.get)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))
        dispatch(featchKategori({ resource: "kategory" }))
        

    },[])

    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;

    return(
       <DeshbordStyle>

        <GrirWrapper>
             {animals.map(item =>{ 
                const category =kategori.find(cat => cat.id === item.categoryId)
                const categoryName = category?.kategoryName || "Non category"
                return(
                <CardWrapper to={`/detailedPage/${item.id}`} key={item.id} state={{item, categoryName}}>
                    
                    <ImgWrapper>
                        <img src={item.img} alt="" />
                    </ImgWrapper>

                    <CardContent>
                        <h1>{item.name}</h1>
                        <h3>{categoryName}</h3>
                        <h4>{item.price} ₾</h4>
                        <p>{item.description}</p>
                    </CardContent>

                    <PopulatStile>
                        <p>stock: {item.quantity}</p>
                        {item.isPopular?(<h4>Popular</h4>): ("")}
                    </PopulatStile>

                </CardWrapper>
            )})}
            
            </GrirWrapper>
            
        </DeshbordStyle>
    )
}