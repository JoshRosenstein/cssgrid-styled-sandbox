import {
  alignItems,
  justifyContent,
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
  fontSize,
  color,
  style,
  pseudoStyle,
  responsiveStyle,
  display
} from 'styled-system'

import PropTypes from 'prop-types'

export const size = props => ({
  ...minWidth(props),
  ...maxWidth(props),
  ...width(props),
  ...minHeight(props),
  ...height(props),
  ...maxHeight(props)
})

export const sizeProps = {
  ...minWidth.propTypes,
  ...maxWidth.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...maxHeight.propTypes
}
size.propTypes = sizeProps

export const oflow = style({
  prop: 'oflow',
  cssProperty: 'overflow'
})

export const oflowX = style({
  prop: 'oflowX',
  cssProperty: 'overflowX'
})
export const oflowY = style({
  prop: 'oflowY',
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

export const overflow = props => ({
  ...oflow(props),
  ...oflowX(props),
  ...oflowY(props)
})

export const overflowProps = {
  ...oflow.propTypes,
  ...oflowX.propTypes,
  ...oflowY.propTypes
}
overflow.propTypes = overflowProps

export const gridContainer = props => ({
  ...display(props),
  ...templateRows(props),
  ...templateColumns(props),
  ...templateAreas(props),

  ...template(props),
  ...autoRows(props),
  ...autoColumns(props),
  ...autoFlow(props),
  ...grid(props),
  ...rowGap(props),
  ...columnGap(props),
  ...gap(props),
  ...justifyContent(props),
  ...alignContent(props),
  ...justifyItems(props),
  ...alignItems(props)
})

export const gridContainerProps = {
  ...display.propTypes,
  ...templateRows.propTypes,
  ...templateColumns.propTypes,
  ...templateAreas.propTypes,

  ...template.propTypes,
  ...autoRows.propTypes,
  ...autoColumns.propTypes,
  ...autoFlow.propTypes,
  ...grid.propTypes,
  ...rowGap.propTypes,
  ...columnGap.propTypes,
  ...gap.propTypes,
  ...justifyContent.propTypes,
  ...alignContent.propTypes,
  ...justifyItems.propTypes,
  ...alignItems.propTypes
}

gridContainer.propTypes = gridContainerProps

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

const gridPoistion = props => ({
  justifySelf: props.center
    ? 'center'
    : props.right ? 'end' : props.left ? 'start' : null,
  alignSelf: props.middle
    ? 'center'
    : props.top ? 'start' : props.bottom ? 'end' : null
})
export const gridItems = props => ({
  ...rowStart(props),
  ...rowEnd(props),
  ...columnStart(props),
  ...columnEnd(props),
  ...row(props),
  ...column(props),
  ...area(props),
  ...justify(props),
  ...alignSelf(props),
  ...zIndex(props),
  ...order(props),
  ...gap(props),
  ...justifyContent(props),
  ...alignContent(props),
  ...justifyItems(props),
  ...alignItems(props),
  ...gridPoistion(props)
})

export const gridItemsProps = {
  ...rowStart.propTypes,
  ...rowEnd.propTypes,
  ...columnStart.propTypes,
  ...columnEnd.propTypes,
  ...row.propTypes,
  ...column.propTypes,
  ...area.propTypes,
  ...justify.propTypes,
  ...alignSelf.propTypes,
  ...zIndex.propTypes,
  ...order.propTypes,
  ...gap.propTypes,
  ...justifyContent.propTypes,
  ...alignContent.propTypes,
  ...justifyItems.propTypes,
  ...alignItems.propTypes,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool
}

gridItems.propTypes = gridItemsProps
