import {Button, Item} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachItem, onClickdirection, isActive} = props

  const {value, displayText} = eachItem

  const directionClicked = () => {
    onClickdirection(value)
  }
  return (
    <Item>
      <Button type="button" onClick={directionClicked} isActive={isActive}>
        {displayText}
      </Button>
    </Item>
  )
}

export default GradientDirectionItem
