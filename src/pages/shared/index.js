import styled from 'styled-components'
import { space } from 'styled-system'
import theme from '../../theme'
import { Grid } from '../../components'

const Item = styled.div`
  ${space};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
`

Item.defaultProps = {
  px: '1rem',
  theme: theme
}

const GridItem = styled(Grid.Item)`
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
  padding: 20px;
`

const spacing = [2, 3, 4]

export { Item, spacing, GridItem }
