import { Link } from "react-router-dom";
import styled from "styled-components";


export const ContantName = styled.div`

display:flex;
flex-direction:column;
width: 1200px;
margin:0 auto;
box-sizing:border-box;
gap:20px;
`
export const Back = styled(Link)`
display:flex;
width:100px;
padding:10px 15px;
border-radius:10px;
background-color:#DCDCDC;
text-decoration:none;
color:#191970;

&:hover{
    background-color:#E6E6FA;
}
`
export const HomeContiner = styled.div`
display:flex;
flex-direction:column;
width:100%;
background-color:white;
box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
padding:30px;
border-radius:10px;
box-sizing:border-box;
`
export const CardSection = styled.div `
display:flex;
width:100%;
box-sizing:border-box;
gap:30px;
height: 350px;
`

export const CardImg = styled.div `

display:flex;
width:30%;
box-sizing:border-box;
border-radius:10px;
overflow:hidden;

img{
    width:100%;
    height:100%;
    object-fit:cover;
}
`

export const CardContant = styled.div `
display:flex;
flex-direction:column;
box-sizing:border-box;
gap:30px;
margin:0;


  h3 {
    display: inline-block;
    font-size: 16px;
    color: white;
    margin: 0;
    border-radius:10px;
    padding:10px 20px; 
    background-color:#4682B4;
    max-width: max-content;
  }

  h4{
    display:inline-block;
    max-width:max-content;
    padding:12px 25px;
    background-color:#FFDAB9;
    border-radius:10px;
    border:1px solid #E9967A;
    color:#E9967A;
    margin:0;
}
`

export const ButtonColor = styled.div  `
display:flex;
flex-direction:column;
box-sizing:border-box;
margin:0;
padding:20px;
gap:10px;

p{
    margin:0;
}

h5{
   margin:0;
   color:red; 
   font-size:18px;
   font-weight:bolder;
}



background-color:#F5F5F5;
border-radius:10px;
justify-content:center;
align-items:center;
width:200px;
`
export const CardContinerWrapper = styled.div  `
display:flex;
box-sizing:border-box;
gap:10px;
width:100%;
`
export const CardDescription = styled.div `
display:flex;
flex-direction:column;
box-sizing:border-box;
margin:30px 0;
border-radius:10px;
background-color:#F5F5F5;
padding:20px;
gap:10px;
color:#808080;
border:1px solid #808080;


h3, p {
margin:0px;
padding:0px;

}
`
export const CardsButton = styled.div`
display:flex;
box-sizing:border-box;
width:100%;
justify-content:center;
align-items:center;
gap:30px;

`

export const RedButtom = styled.div`
display:flex;
box-sizing:border-box;
width:120px;
justify-content:center;
align-items:center;
background-color:#4682B4;
padding:12px 25px;
border-radius:10px;
color:white;
cursor:pointer;
`


export const BluButtom = styled.div`
display:flex;
box-sizing:border-box;
width:120px;
justify-content:center;
align-items:center;
background-color:#DC143C;
padding:12px 25px;
border-radius:10px;
color:white;
cursor:pointer;

`

export const DetailedPageStyle = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:100%;
background-color:#F8F8FF;
margin:0;
padding:0;

`












