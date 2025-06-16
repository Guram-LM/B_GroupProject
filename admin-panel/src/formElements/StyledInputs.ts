
import styled from "styled-components";

// form გვერდის სტილები

export const FormPageStyle  = styled.div`
  display:flex;
  flex-direction: column;
  box-sizing: border-box;
  width:1200px;
  margin:10px auto;
  padding: 0px;
  gap: 30px;
 
`
export const AnimalsForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  max-width:600px;
  width:100%;
  margin: 0 auto;

h1{
  text-align: center;
  margin-bottom: 35px;
}



  
input{
  padding:10px;
  border-radius: 5px;
  width:100%;
  box-sizing: border-box;
  border: 1px solid gray
}
input[id="des"] {
  resize: none;
  overflow: hidden;
  min-height: 160px;
  border-radius: 5px;

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
  background-color:#4682B4;
  border: none;
  color:white;
  box-sizing: border-box;
  padding: 15px;
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
  background-color:#d3d3d3;
  border: none;
  color: #333333;
  box-sizing: border-box;
  padding: 15px;
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

export const CekeSection = styled.div`
  display: flex;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
  margin: 15px 0 0 0;
  padding: 0px;
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 18px; /* ტექსტის ზომა */
    cursor: pointer;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
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




