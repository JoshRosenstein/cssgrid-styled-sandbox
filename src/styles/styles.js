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
  display,
  flex,
  flexDirection,
  flexWrap,
  util
} from 'styled-system'

import PropTypes from 'prop-types'
const pt = {
  responsive: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  numberOrString: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
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

export const templateRows = responsiveStyle({
  prop: 'templateRows',
  cssProperty: 'gridTemplateRows'
})

export const templateColumns = responsiveStyle({
  prop: 'templateColumns',
  cssProperty: 'gridTemplateColumns'
})

export const templateAreas = responsiveStyle({
  prop: 'templateAreas',
  cssProperty: 'gridTemplateAreas'
})

export const template = responsiveStyle({
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

export const rowGap = responsiveStyle({
  prop: 'rowGap',
  cssProperty: 'gridRowGap',
  key: 'space'
})

export const columnGap = responsiveStyle({
  prop: 'columnGap',
  cssProperty: 'gridColumnGap',
  key: 'space'
})

export const gridGap = responsiveStyle({
  prop: 'gridGap',
  alias: 'gap',
  key: 'space',
  numberToPx: true
})

export const justifyItems = style({
  prop: 'justifyItems'
})
//flex-start | flex-end | center | space-between | space-around | space-evenly
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
//TODO: responsive styles dont work correctly when combining them like this
export const gridContainer = props => ({
  ...display(props),
  ...templateRows(props),
  ...templateColumns(props),
  ...templateAreas(props),

  ...autoRows(props),
  ...autoColumns(props),
  ...autoFlow(props),
  ...grid(props),
  ...rowGap(props),

  ...template(props),
  ...justifyContent(props),
  ...alignContent(props),
  ...justifyItems(props),
  ...alignItems(props)
})

const gridContainerProps = {
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
  ...zIndex(props),
  ...order(props),
  ...gridGap(props),
  ...justifyContent(props),
  ...alignContent(props),
  ...justifyItems(props),
  ...alignItems(props),
  ...gridPoistion(props),
  ...alignSelf(props)
})

const gridItemsProps = {
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
  ...gridGap.propTypes,
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

const flexColumnShim = n => (n === true ? 'column' : n)
export const flexColumn = responsiveStyle({
  prop: 'flexDirection',
  alias: 'column',
  getter: flexColumnShim
})

export const flexFlow = responsiveStyle({
  prop: 'flexFlow',
  alias: 'flow'
})

export const flexGap = responsiveStyle({
  prop: 'flexGap',
  alias: 'gap',
  key: 'space',
  numberToPx: true,
  cssProperty: ['marginTop', 'marginLeft']
})

export const flexGapPadding = responsiveStyle({
  prop: 'flexGapPadding',
  alias: 'gap',
  key: 'space',
  numberToPx: true,
  cssProperty: ['paddingTop', 'paddingLeft']
})

const flexPosition = p => {
  if (p.column || p.direction === 'column') {
    return {
      alignItems: p.center
        ? 'center'
        : p.right ? 'flex-end' : p.left ? 'flex-start' : null,
      justifyContent: p.middle
        ? 'center'
        : p.top ? 'flex-start' : p.bottom ? 'flex-end' : null,
      flexDirection: 'column'
    }
  }
  return {
    justifyContent: p.center
      ? 'center'
      : p.right ? 'flex-end' : p.left ? 'flex-start' : null,
    alignItems: p.middle
      ? 'center'
      : p.top ? 'flex-start' : p.bottom ? 'flex-end' : null
  }
}

export const flexContainer = props => ({
  ...display(props),
  ...flexDirection(props),
  ...flexWrap(props),
  ...flexFlow(props),
  ...justifyContent(props),
  ...alignContent(props),
  ...alignItems(props),
  ...flexPosition(props)
})
const flexContainerProps = {
  ...display.propTypes,
  ...flexDirection.propTypes,
  ...flexWrap.propTypes,
  ...flexFlow.propTypes,
  ...justifyContent.propTypes,
  ...alignContent.propTypes,
  ...alignItems.propTypes,
  column: PropTypes.bool,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool,
  gapType: PropTypes.string,
  wrap: PropTypes.bool ///Overide
}
flexContainer.propTypes = flexContainerProps

export const flexGrow = responsiveStyle({
  prop: 'flexGrow',
  alias: 'grow'
})

export const flexShrink = responsiveStyle({
  prop: 'flexShrink',
  alias: 'shrink'
})

export const flexBasis = responsiveStyle({
  prop: 'basis',
  cssProperty: 'flexBasis'
})

const flexItemPoistion = props =>
  props.center
    ? { marginLeft: 'auto', marginRight: 'auto' }
    : props.middle
      ? { marginLeft: 'auto', marginRight: 'auto' }
      : props.top
        ? { marginBottom: 'auto' }
        : props.right
          ? { marginLeft: 'auto' }
          : props.bottom
            ? { marginTop: 'auto' }
            : props.left ? { marginRight: 'auto' } : null

export const flexItem = props => ({
  ...flexGrow(props),
  ...flexShrink(props),
  ...flexBasis(props),
  ...flex(props),
  ...zIndex(props),
  ...alignSelf(props),
  ...order(props),
  ...flexItemPoistion(props)
})

const flexItemProps = {
  ...flexGrow.propTypes,
  ...flexShrink.propTypes,
  ...flexBasis.propTypes,
  ...flex.propTypes,
  ...zIndex.propTypes,
  ...alignSelf.propTypes,
  ...order.propTypes,
  center: PropTypes.bool,
  middle: PropTypes.bool,
  top: PropTypes.bool,
  right: PropTypes.bool,
  bottom: PropTypes.bool,
  left: PropTypes.bool
}

flexItem.propTypes = flexItemProps

const columnCounter = n => (util.num(n) ? 100 / n + '%' : null)
export const columnCount = responsiveStyle({
  prop: 'columnCount',
  cssProperty: 'width',
  getter: columnCounter
})

const columnCounterGrid = n => (util.num(n) ? 'repeat(' + n + ', 1fr)' : null)
export const columnCountGrid = responsiveStyle({
  prop: 'columnCount',
  cssProperty: 'gridTemplateColumns',
  getter: columnCounterGrid
})

export const columnWidth = responsiveStyle({
  prop: 'columnWidth',
  cssProperty: 'width',
  numberToPx: true
})

const columnWidthrGrid = n =>
  util.num(n) ? 'repeat(auto-fit,minmax(' + util.px(n) + ', 1fr))' : null

export const columnWidthGrid = responsiveStyle({
  prop: 'columnWidth',
  cssProperty: 'gridTemplateColumns',
  getter: columnWidthrGrid
})
