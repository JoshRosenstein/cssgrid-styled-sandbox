import styled from 'styled-components'
import Flex from './Flex'
import {
  flexContainer,
  flexGap,
  flexGapPadding,
  gridContainer,
  size,
  overflow,
  propTypes,
  gridItems,
  columnCount,
  columnCountGrid,
  columnWidth,
  columnWidthGrid,
  gridGap
} from '../styles'


export const supportsModernGrid = `@supports (grid-row-gap:0)`
const Columns = Flex.extend`
  > * {
    flex-grow: 1;
    ${columnWidth} ;
    ${columnCount} ;

    ${supportsModernGrid} {
      width: initial;
      padding-top: initial;
      padding-left: initial;
    }
    }
    
    ${supportsModernGrid} {
      display: grid;
      ${gridContainer};
      ${gridGap};
      ${columnWidthGrid};
      ${columnCountGrid};
      margin-top: initial;
      margin-left: initial;
    }
  }

  }
`

///TODO: rather than multiple columnwidthGrid ect, creat 1 with 2 css properties, or create a function that replaces the dummy property
Columns.displayName = 'Columns'

Columns.Item = styled(Flex.Item)`
  ${supportsModernGrid} {
    ${gridItems};
  }
`

Columns.Item.displayName = 'Columns.Item'

Columns.defaultProps = {
  gapType: 'padding',
  wrap: true
}

export default Columns
