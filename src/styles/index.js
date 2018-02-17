import { styles as ss } from 'styled-system'

import * as myss from './styles'

const styles = Object.assign(ss, myss)
export const propTypes = {}

Object.keys(styles).forEach(key => {
  propTypes[key] = styles[key].propTypes
})

styles.propTypes = propTypes

export {
  space,
  width,
  fontSize,
  textColor,
  bgColor,
  color,
  // typography
  fontFamily,
  textAlign,
  lineHeight,
  fontWeight,
  letterSpacing,
  // layout
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  size,
  ratio,
  // flexbox
  alignItems,
  alignContent,
  justifyContent,
  flexWrap,
  flexDirection,
  flex,
  alignSelf,
  order,
  // borders
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borders,
  borderColor,
  borderRadius,
  // misc
  boxShadow,
  background,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  // position
  position,
  zIndex,
  top,
  right,
  bottom,
  left,
  // psuedoclasses
  hover,
  focus,
  active,
  disabled,
  // deprecated
  borderWidth
} from 'styled-system'

export { overflow, gridContainer, gridItems } from './styles'
export default styles
