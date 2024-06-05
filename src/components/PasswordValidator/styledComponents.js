import styled from 'styled-components'

export const Bg = styled.div`
  background-color: #24263c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const BgCard = styled.div`
  background-color:#383a4e;
  width: 50%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0px 0px 1px 1px #434451;
    
    @media (min-width:768px) {
        width: 35%;
        min-height: 23vh;
        
    }
        `

export const Head = styled.h1`
    color: #ffffff;
    font-family: Roboto;
    font-size: 20px;
    margin: 0px;
    margin-bottom: 10px;
    @media (min-width:768px) {
        font-size:40px;
    }

        `

export const Para = styled.p`
    color: #f8fafc;
    font-size: 13px;
    margin: 0px;
    margin-bottom: 20px;
    @media (min-width:768px) {
        font-size: 17px;
        margin-bottom: 25px;
        
    }

        `

export const InputBox = styled.input`
    background-color: ${props =>
      props.passwordLength <= 8 && props.passwordLength !== 0
        ? '#ef4444'
        : '#edeeff'};
    cursor: pointer;
    outline: none;
    width: 90%;
    padding: 10px;
    border-radius: 2px;
    border: 0px;
    margin: 0px;

        `

export const ErrorPara = styled.p`
    color: #ef4444;
    font-size: 12px;
    margin: 0px;
    margin-top: 5px;
    @media (min-width:768px) {
        font-size: 15px;
    }


`
