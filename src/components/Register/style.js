import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 80%;
  margin-bottom: 10%;

  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
`
export const RegImg = styled.img`
  width: 50%;
  max-width: 500px;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  width: 50%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const Heading = styled.h1`
  color: #334155;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: 45px;
  margin-bottom: 20px;
`

export const Input = styled.input`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
  color: #475569;
  outline: none;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: medium;
  width: 90%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`
export const Label = styled.label`
  color: #7b8794;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: small;
  margin-bottom: 10px;
`
export const Btn = styled.button`
  color: #ffffff;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: small;
  outline: none;
  cursor: pointer;
  padding: 10px 20px;
  border: 0px;
  border-radius: 10px;
  background-color: #3b82f6;
  margin-top: 5%;
`

export const ErrMsg = styled.p`
  color: #ff0b37;
  font-weight: bold;
  font-family: 'Roboto';
  font-size: small;
  margin: 0px;
`

export const Options = styled.select`
  padding: 15px;
  border-radius: 5px;
  border: 1px solid #cbd5e1;
  color: #475569;
  outline: none;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight: 500;
  font-size: medium;
  width: 90%;
  @media screen and (max-width: 576px) {
    width: 100%;
  }
`

export const Option = styled.option``
