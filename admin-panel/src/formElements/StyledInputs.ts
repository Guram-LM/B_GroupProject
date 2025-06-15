
import styled from "styled-components";




// form გვერდის სტილები
export const AnimalsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  max-width:600px;
  width:100%;
  margin: 0 auto;



  
 input{
  padding:10px;
  border-radius: 5px;
  width:100%;
  box-sizing: border-box;

  

 }

 select{
  width:100%;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  box-sizing: border-box;
 }
`;

export const Addbutton  = styled.button`
  display:flex;
  width:150px;
  margin:10px auto;
  justify-content:center;
  background-color:blue;
  color:white;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  &:hover{
  background-color:green;
  }
  
`

export const Cancelbutton  = styled.button`
  display:flex;
  width:150px;
  margin:10px auto;
  justify-content:center;
  background-color:grey;
  color:white;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 5px;
  &:hover{
  background-color:red;
  }
`
export const ButtonWrapper = styled.div`
  display:flex;
  width:100%;
  padding: 20px;
  justify-content:space-between;
  align-items:center;
  box-sizing: border-box;
`
// form გვერდის სტილები


// AdminLayout სტილები

export const LayoutAdmin =styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100vw;
margin:0px;
padding:0px;
`
// AdminLayout სტილები




