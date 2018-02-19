import { default as ss } from 'styled-system'
import R from 'ramda'
delete ss['propTypes']
//console.log(Object.keys(ss))

import * as myss from './styles'
//console.log(Object.keys(myss))
const styles = Object.assign(ss, myss)
//console.log(Object.keys(styles))
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

export {
  overflow,
  gridContainer,
  gridItems,
  flexContainer,
  flexItem,
  flexGap,
  flexGapPadding,
  columnCount,
  columnCountGrid,
  columnWidthGrid,
  columnWidth,
  gridGap
} from './styles'

export const StyleProps = []
const GetKey = (idx, obj) => R.keys(obj)[idx]
//var val2 = (k, i2) => (v, i) => (StyleProps[i2 + i] = { [k]: v })
//var tt = (value, idx, obj) => mapIndexed(val2(GetKey(idx, obj), idx), value)
var tt = (value, idx, obj) =>
  (StyleProps[idx] = { name: GetKey(idx, obj), props: value })
const styl = R.mapObjIndexed(
  (num, key, obj) => R.keys(num.propTypes),

  styles
)
R.addIndex(R.map)(tt, styl)

export default styles
