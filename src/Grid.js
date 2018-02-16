import {
  alignItems,
  justifyContent,
  style,
  maxWidth,
  minWidth,
  minHeight,
  height,
  maxHeight,
  alignContent,
  propTypes,
  alignSelf,
  zIndex,
  order,
  width,
  space,
  fontSize,
  color
} from 'styled-system'
import PropTypes from 'prop-types'
import Box from './Box'
import CleanDiv from './CleanDiv'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
//BOX hass:
// width,
//   space,
//   fontSize,
//   color,
//   flex,
//   order

export const overflow = style({
  prop: 'overflow',
  cssProperty: 'overflow'
})

export const overflowX = style({
  prop: 'overflowX',
  cssProperty: 'overflowX'
})
export const overflowY = style({
  prop: 'overflowY',
  cssProperty: 'overflowY'
})

export const templateRows = style({
  prop: 'templateRows',
  cssProperty: 'gridTemplateRows'
})

export const templateColumns = style({
  prop: 'templateColumns',
  cssProperty: 'gridTemplateColumns'
})

export const templateAreas = style({
  prop: 'templateAreas',
  cssProperty: 'gridTemplateAreas'
})

export const template = style({
  prop: 'template',
  cssProperty: 'gridTemplate'
})

export const autoRows = style({
  prop: 'autoRows',
  cssProperty: 'gridAutoRows'
})

export const autoColumns = style({
  prop: 'autoColumns',
  cssProperty: 'gridAutoColumns'
})

export const autoFlow = style({
  prop: 'autoFlow',
  cssProperty: 'gridAutoFlow'
})

export const grid = style({
  prop: 'grid',
  cssProperty: 'grid'
})

export const rowGap = style({
  prop: 'rowGap',
  cssProperty: 'gridRowGap'
})

export const columnGap = style({
  prop: 'columnGap',
  cssProperty: 'gridColumnGap'
})

export const gap = style({
  prop: 'gap',
  cssProperty: 'gridGap'
})

export const justifyItems = style({
  prop: 'justifyItems'
})

const Grid = Box.extend(
  [],
  { display: 'grid' },
  width,
  space,
  fontSize,
  color,
  minWidth,
  maxWidth,

  minHeight,
  height,
  maxHeight,

  overflow,
  overflowX,
  overflowY,

  templateRows,
  templateColumns,
  templateAreas,
  template,

  autoRows,
  autoColumns,
  autoFlow,

  grid,

  rowGap,
  columnGap,
  gap,

  justifyContent,
  alignContent,
  justifyItems,
  alignItems
)

Grid.displayName = 'Grid'

Grid.propTypes = {
  ...propTypes.minWidth,
  ...propTypes.maxWidth,
  ...propTypes.minHeight,
  ...propTypes.height,
  ...propTypes.maxHeight,
  ...propTypes.height,

  overflow: numberOrString,
  overflowX: numberOrString,
  overflowY: numberOrString,

  templateRows: numberOrString,
  templateColumns: numberOrString,
  templateAreas: numberOrString,
  template: numberOrString,

  autoRows: numberOrString,
  autoColumns: numberOrString,
  autoFlow: numberOrString,

  grid: numberOrString,

  rowGap: numberOrString,
  columnGap: numberOrString,
  gap: numberOrString,

  ...propTypes.justifyContent,
  ...propTypes.alignContent,
  justifyItems: numberOrString,
  ...propTypes.alignItems
}

export const rowStart = style({
  cssProperty: 'gridRowStart',
  prop: 'rowStart'
})

export const rowEnd = style({
  cssProperty: 'gridRowEnd',
  prop: 'rowEnd'
})

export const columnStart = style({
  cssProperty: 'gridColumnStart',
  prop: 'columnStart'
})

export const columnEnd = style({
  cssProperty: 'gridColumnEnd',
  prop: 'columnEnd'
})

export const row = style({
  cssProperty: 'gridRow',
  prop: 'row'
})

export const column = style({
  prop: 'column',
  cssProperty: 'gridColumn'
})

export const area = style({
  prop: 'area',
  cssProperty: 'gridArea'
})

export const justify = style({
  prop: 'justify',
  cssProperty: 'justifySelf'
})

Grid.Item = Box.extend(
  [],
  width,
  space,
  fontSize,
  color,

  minWidth,
  maxWidth,

  minHeight,
  height,
  maxHeight,

  rowStart,
  rowEnd,
  columnStart,
  columnEnd,
  row,
  column,
  area,
  justify,
  alignSelf,

  order,
  zIndex
)

Grid.Item.displayName = 'Grid.Item'

Grid.Item.propTypes = {
  ...propTypes.minWidth,
  ...propTypes.maxWidth,
  ...propTypes.minHeight,
  ...propTypes.height,
  ...propTypes.maxHeight,

  rowStart: numberOrString,
  rowEnd: numberOrString,
  columnStart: numberOrString,
  columnEnd: numberOrString,
  row: numberOrString,
  column: numberOrString,
  area: numberOrString,
  justify: numberOrString,
  ...propTypes.alignSelf,

  ...propTypes.order,
  ...propTypes.zIndex
}

export default Grid
