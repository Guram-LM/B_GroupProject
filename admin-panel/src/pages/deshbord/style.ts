// style.ts
import { Link } from "react-router-dom";
import styled from "styled-components";

export const DeshbordStyle = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
  box-sizing: border-box;
  margin: 0 auto 50px;
  
`;
// cards style

export const GrirWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  margin:0;
  gap: 20px;
  box-sizing: border-box;
`
export const AnimalsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing:border-box;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  border-radius: 10px;
  background-color: white;
`
export const AddAnimalHeder = styled(Link)`
  display: flex;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 100%;
  background-color:#4682B4;
  padding: 15px 30px;
  text-decoration:none;
  color: white;
  &:hover {
  background-color:blue;
  }
 
`



export const CardWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 100%;
  background-color: #fff;
  padding: 20px;
  text-decoration:none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: translateY(0px);
  }
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  border-radius:10px 10px 0 0;
  margin-bottom:20px;
  

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 20px;
    margin: 0;
  }

  h3 {
    display: inline-block;
    font-size: 16px;
    color: white;
    margin: 0;
    border-radius:10px;
    padding:10px 15px; 
    background-color:#4682B4;
    max-width: max-content;
  }

  h4{
    color:green;
    font-weight:bolder;
    margin: 0;
  }

  p {
    font-size: 14px;
    margin: 0;
    color: #C0C0C0;;
  }
`

export const PopulatStile = styled.div`
    display:flex;
    margin: 0;
    box-sizing: border-box;
    justify-content:space-between;
    align-items:center;
    padding:0;

h4{
   display:inline-block;
    max-width:max-content;
    padding:10px 20px;
    background-color:#FFDAB9;
    border-radius:10px;
    border:1px solid #E9967A;
    color:#E9967A;
    margin:0;
}

`
