import { Link, useLocation, useNavigate } from "react-router-dom"
import type { IItems } from "../../interface/Interface"
import { useAppDispatch} from "../../store/hook"
import { deleteThunk } from "../../store/delete/DeleteThunks"



export const DetailedPage = () => {
    const location = useLocation()
    const {item, categoryName}=location.state as {item:IItems, categoryName:string}


    const navigate =useNavigate()

    

    const dispatch = useAppDispatch()
    const deletefunction = (id:string, resource:string) =>{

        dispatch(deleteThunk({resource, id}))
        .then(() => navigate("/"))


    }



    return(

        <div>
          
        <Link to= {"/"}>&larr; Bck to Pets</Link>

        <div>
                <div>
                    <div>
                        <img src={item.img}alt="" />
                    </div>
                    <div>
                        <h1>{item.name}</h1>
                            <h3>{categoryName}</h3>
                        <div>

                           <div>
                            <p>Stock</p>
                            <p>{item.quantity}</p> 
                           </div>

                            <div>
                            <p>Price</p>
                            <p>{item.price}</p> 
                            </div>
                        </div>
                         {item.isPopular?(<h4>Popular</h4>): ("")}
                    </div>

                </div>

                <div>
                    <h3>Description</h3>
                    <p>{item.description}</p>

                </div>


                <div>
                    <button onClick={() => deletefunction(item.id, "animals") }>Delete Pat</button>

                    <button>Edit Pet</button>
                </div>

        </div>


        </div>
        
    )

    
}