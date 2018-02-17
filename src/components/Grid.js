import system from '../system'

export const Grid = system(
  'width',
  'space',
  'fontSize',
  'color',
  'size',
  'overflow',
  'gridContainer',
  { display: 'grid' }
)

export const GridItem = system('size', 'gridItems')
