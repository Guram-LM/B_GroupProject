import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { featchAnimals } from "../../store/get/getThunks"
import { CardContent, CardWrapper, GrirWrapper, ImgWrapper } from "./style"

export const Deshboard = () => {

    const {animals, loading, error} = useSelector(state => state.get)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))

    },[])

    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;

    return(
       <div >

        <GrirWrapper>
             {animals.map(item => 
                <CardWrapper key={item.id}>
                    
                    <ImgWrapper>
                        <img src={item.img} alt="" />
                    </ImgWrapper>

                    <CardContent>
                        <h1>{item.name}</h1>
                        <h3>cateory</h3>
                        <p>{item.price}</p>
                        <p>{item.description}</p>
                    </CardContent>

                    <div>
                        <p>{item.quantity}</p>
                        <p>popular</p>
                    </div>

                </CardWrapper>
            )}
            </GrirWrapper>
            
        </div>
    )
}