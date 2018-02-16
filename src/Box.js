import styled from 'styled-components'
import {
  space,
  width,
  flex,
  color,
  fontSize,
  responsiveStyle,
  propTypes
} from 'styled-system'
import CleanDiv from './CleanDiv'
import theme from './theme'

export const order = responsiveStyle({
  prop: 'order',
  cssProperty: 'order'
})

const Box = styled(CleanDiv)(
  [],
  { boxSizing: 'border-box' },
  width,
  space,
  fontSize,
  color
)

Box.displayName = 'Box'

Box.defaultProps = {
  theme
}

Box.propTypes = {
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color
}

export default Box
