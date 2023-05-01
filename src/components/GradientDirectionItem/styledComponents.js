import styled from 'styled-components'

export const Button = styled.button`
  background-color: ${props => (props.isActive ? '#ffffff' : ' #ffffff79')};
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 40px;
  width: 120px;
  border: none;
  margin: 10px;
  border-radius: 5px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
export const Item = styled.li`
  list-style-type: none;
`
