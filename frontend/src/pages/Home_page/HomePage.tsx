import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { featchAnimals } from "../../store/get/getThunks";


export const HomePage =() => {

    const {animals,error,loading}=useAppSelector(state => state.get)

    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(featchAnimals({resource:"animals"}))

    },[])

    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;

    return(

        <div>
            <h1>HomePage</h1>
        
        {animals.map(item =>
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{item.gender}</p>
                <p>{item.description}</p>
                <p>{item.isPopular}</p>
            
            </div>
        )}
        </div>
        
    )

    
}