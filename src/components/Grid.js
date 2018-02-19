import system from '../system'
import tag from './clean-tag'
import styled from 'styled-components'
import theme from '../theme'
import {
  width,
  space,
  fontSize,
  color,
  size,
  overflow,
  propTypes,
  gridItems,
  gridContainer,
  gridGap,
  columnGap
} from '../styles'

const Grid = styled(tag)(
  [],
  { display: 'grid' },
  width,
  space,
  fontSize,
  color,
  size,
  overflow,
  gridGap,
  gridContainer,
  columnGap
)

Grid.displayName = 'Grid'
Grid.defaultProps = {
  theme: theme
}

Grid.propTypes = {
  ...propTypes.width,
  ...propTypes.space,
  ...propTypes.fontSize,
  ...propTypes.color,
  ...propTypes.size,
  ...propTypes.overflow,
  ...propTypes.gridGap,
  ...propTypes.columnGap,
  ...propTypes.gridContainer
}
//Grid.Item = system('size', 'gridItems')

Grid.Item = styled(tag)([], size, gridItems, color, space)
export default Grid
//export const GridItem = system('size', 'gridItems')
