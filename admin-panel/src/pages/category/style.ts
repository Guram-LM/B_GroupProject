import styled from "styled-components";

export const CategoryWrapper = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
width: 1200px;
margin: 0px auto 50px;
padding: 0;
gap: 50px;
`
export const KategoryCard = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
width: 100%;
margin: 0px;
padding: 30px;
gap: 40px;
background-color:white;
border-radius: 10px;
h1, p{
    margin: 0;
    padding: 0;
}
`
export const CategoryButtonSection = styled.div`
display: flex;
box-sizing:border-box;
width: 100%;
margin: 0px;
padding: 0px;
gap: 20px;
`
export const DelButton = styled.button`
display:flex;
box-sizing:border-box;
width:80px;
justify-content:center;
align-items:center;
background-color:#DC143C;
padding: 10px 10px;
border-radius:10px;
border: none;
color:white;
`
export const EdtButton = styled.button`
display:flex;
box-sizing:border-box;
width:80px;
justify-content:center;
align-items:center;
background-color:#d3d3d3;
border: none;
color: #333333;
border-radius:10px;
border: none;
`