import styled from 'styled-components'

export const MainContainer = styled.div`
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  text-align: center;
`

export const DirectionP = styled.p`
  color: #ffffff;
  font-size: 24px;
  font-weight: 400;
  text-align: center;
`
export const UnorderedCont = styled.ul`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding-left: 0px;
`
export const PickColorHead = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`
export const InputTagMainContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 7px;
`
export const GenerateBtn = styled.button`
  background-color: #00c9b7;
  border-radius: 4px;
  padding: 7px;
  border: none;
  color: #1e293b;
  font-size: 14px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 15px;
`
