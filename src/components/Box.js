import styled from 'styled-components'
import {
  space,
  size,
  flex,
  color,
  fontSize,
  order,
  display
} from 'styled-system'
import tag from 'clean-tag'
import theme from '../theme'

const Box = styled(tag)(
  [],
  { boxSizing: 'border-box' },
  size,
  space,
  fontSize,
  color,
  flex,
  order,
  display
)

Box.displayName = 'Box'

Box.defaultProps = {
  theme: theme
}

Box.propTypes = {
  ...size.propTypes,
  ...space.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes,
  ...flex.propTypes,
  ...order.propTypes,
  ...display.propTypes
}

export default Box
