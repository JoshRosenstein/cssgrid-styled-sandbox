import styled from 'styled-components'
import { propTypes } from 'styled-system'
import theme from './theme'
import cleanElement from 'clean-element'
import PropTypes from 'prop-types'

const numberOrString = PropTypes.oneOfType([PropTypes.number, PropTypes.string])
const CleanDiv = cleanElement('div')

// props that are defined as propTypes are removed
CleanDiv.propTypes = {
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.flex,

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
  ...propTypes.alignItems,

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
  ...propTypes.zIndex,
  theme: PropTypes.object
}

export default CleanDiv
