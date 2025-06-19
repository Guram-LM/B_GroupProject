import styled from "styled-components";
import background from "../../assets/Padlock.jpg"; 


export const ValidationPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${background}); 
`
export const LoginWrapper = styled.div`
  width: 320px;
  padding: 20px;
  background: transparent;
  text-align: center;
`
export const Title = styled.h2`
  margin-bottom: 16px;
  font-size: 28px;
  color: white;
  font-weight: bolder;
`
export const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  gap: 10px;
  input {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    margin-top: 0.3rem;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    transition: border-color 0.2s ease;

    &:focus {
      border-color: #0077ff;
      outline: none;
    }
  }
`

export const SubmitButton = styled.button`
  padding: 10px;
  background-color:rgb(101, 112, 124);
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 1rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005fcc;
  }
`