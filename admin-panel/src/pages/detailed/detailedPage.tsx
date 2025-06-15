import { Link, useLocation, useNavigate } from "react-router-dom"
import type { IItems } from "../../interface/Interface"
import { useAppDispatch} from "../../store/hook"
import { deleteThunk } from "../../store/delete/DeleteThunks"
import { Back, BluButtom, ButtonColor, CardContant, CardContinerWrapper, CardDescription, CardImg, CardsButton, CardSection, ContantName, DetailedPageStyle, HomeContiner, RedButtom  } from "./Style"



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

        <DetailedPageStyle>
            
        <ContantName>
          
            <Back to= {"/"}>&larr; Bck to Pets</Back>

            <HomeContiner>
                        <CardSection>
                            <CardImg>
                                <img src={item.img}alt="" />
                            </CardImg>
                            <CardContant>
                                <h1>{item.name}</h1>
                                    <h3>{categoryName}</h3>
                                <CardContinerWrapper>

                                    <ButtonColor>
                                        <p>GEL Price</p>
                                        <h5>₾ {item.price}</h5> 
                                    </ButtonColor>

                                    <ButtonColor>
                                        <p>Stock</p>
                                        <p>{item.quantity}</p> 
                                     </ButtonColor>

                                </CardContinerWrapper>
                                {item.isPopular?(<h4>Popular</h4>): ("")}
                            </CardContant>

                        </CardSection>

                        <CardDescription>
                            <h3>Description</h3>
                            <p>{item.description}</p>

                        </CardDescription>


                        <CardsButton>
                            <BluButtom onClick={() => deletefunction(item.id, "animals") }>Delete Pat</BluButtom>

                            <RedButtom onClick={() => navigate("/edit", { state: { item, categoryName } })}>Edit Pet</RedButtom>
                        </CardsButton>

                </HomeContiner>


        </ContantName>
        

        </DetailedPageStyle>

    )

    
}