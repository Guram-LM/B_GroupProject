import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook"
import { AddAnimalHeder, AnimalsHeader, GrirWrapper } from "../deshbord/style"
import { CategoryButtonSection, CategoryWrapper, DelButton, EdtButton, KategoryCard } from "./style"
import { featchKategori } from "../../store/get/getThunks"
import { deleteThunk } from "../../store/delete/DeleteThunks"
import { useNavigate } from "react-router-dom"

export const CategoryPage = () => {

    const {kategori, error, loading} = useAppSelector(state => state.get)

    const dispatch = useAppDispatch()
    const navigate= useNavigate()

    useEffect(() => {
        dispatch(featchKategori({ resource: "kategory" }))
    }, [])


   
    const deleteCategory = (id:string, resource:string) =>{

        dispatch(deleteThunk({resource, id}))
        .then(() => dispatch(featchKategori({ resource })))


    }


    if (loading) return <h1>Loading ...</h1>;
    if (error) return <h1>{error}</h1>;
    return(
        <CategoryWrapper>

            <AnimalsHeader>
                <h1>All Categories</h1>
                <AddAnimalHeder to={"/kategori"}>➕ Add New Category</AddAnimalHeder>
            </AnimalsHeader>


            <GrirWrapper>
            
                {kategori.map(item =>
                
                <KategoryCard key={item.id}>
                    

                    <>
                        <h1>{item.kategoryName}</h1>
                        <p>{item.description}</p>
                        <p>1 pet</p>
                    </>

                    <CategoryButtonSection>
                        <DelButton onClick={() => deleteCategory(item.id!, "kategory") }>Delete</DelButton>

                        <EdtButton onClick={() => navigate("/editCategory", { state: { item, } })}>Edit</EdtButton>
                    </CategoryButtonSection>

                </KategoryCard>
            )}
            
            </GrirWrapper>


        </CategoryWrapper>
    )
}