import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
export const LayoutAdminPage = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
width: 100%;
margin: 0;
padding: 0;
background-color:#F8F8FF;
`
export const LayoutHeaders = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
width: 1200px;
margin: 30px auto 50px;
padding: 0;
gap: 50px;
background-color:#F8F8FF;
`
export const HeaderTiTle = styled.div`
display: flex;
flex-direction: column;
box-sizing:border-box;
justify-content: center;
align-items: center;
width: 100%;
margin: 0;
padding: 40px;
border-radius: 10px;
background-color: white;

`

export const HeaderNav = styled.div`
display: flex;
box-sizing:border-box;
width: 100%;
margin: 0;
padding: 10px;
gap: 50px;
border-radius: 10px;
background-color: white;
`
export const StyledNavLink = styled(NavLink)`
flex: 1; 
text-align: center;
padding: 15px 0;
text-decoration: none;
color: black;
border-radius: 10px;

&.active {
background-color:#4682B4;
font-weight: bold;
color: white;
}
`;
export const TitleImageSector = styled.div`
display: flex;
box-sizing:border-box;
width: 100%;
margin: 0;
padding: 0;
gap: 20px;
justify-content: center;
align-items: center;

img{
    width:50px;
    height:50px;
}
h1{
    margin: 0;
    padding: 0;
    font-size: 40px;
    font-weight: bolder;
}
`
const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 8px 2px #ff4d4d;
  }
  50% {
    box-shadow: 0 0 16px 4px #ff0000;
  }
`
export const LogoutButton = styled.button`
  position: fixed;
  top: 30px;
  right: 30px;

  width: 50px;
  height: 50px;
  border-radius: 50%; 
  
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${glow} 2s infinite alternate ease-in-out;

  &:hover {
    background-color: #cc0000;
  }
`