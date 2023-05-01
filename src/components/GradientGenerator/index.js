import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  MainContainer,
  Heading,
  DirectionP,
  UnorderedCont,
  PickColorHead,
  InputTagMainContainer,
  InputContainer,
  GenerateBtn,
  CardContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here
let colora = ''
let colorb = ''
let direc = ''
class GradientGenerator extends Component {
  state = {direction: 'top', color1: '#014f7b', color2: '#8ae323'}

  onClickdirection = value => {
    direc = value
  }

  inputColora = event => {
    colora = event.target.value
  }

  inputColorb = event => {
    colorb = event.target.value
  }

  generateClicked = () => {
    this.setState({direction: direc, color1: colora, color2: colorb})
  }

  render() {
    const {direction, color1, color2} = this.state

    const gradient = `to ${direction},${color1},${color2}`

    return (
      <MainContainer gradientValue={gradient} data-testid="gradientGenerator">
        <CardContainer>
          <Heading>Generate a CSS color Gradient</Heading>
          <DirectionP>Choose Direction</DirectionP>
          <UnorderedCont>
            {gradientDirectionsList.map(eachItem => (
              <GradientDirectionItem
                key={eachItem.directionId}
                eachItem={eachItem}
                onClickdirection={this.onClickdirection}
                isActive={direction === eachItem.value}
              />
            ))}
          </UnorderedCont>
          <PickColorHead>Pick the Colors</PickColorHead>
          <InputTagMainContainer>
            <InputContainer>
              <p>{color1}</p>
              <input type="color" onChange={this.inputColora} />
            </InputContainer>
            <InputContainer>
              <p>{color2}</p>
              <input type="color" onChange={this.inputColorb} />
            </InputContainer>
          </InputTagMainContainer>
          <GenerateBtn type="button" onClick={this.generateClicked}>
            Generate
          </GenerateBtn>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default GradientGenerator
