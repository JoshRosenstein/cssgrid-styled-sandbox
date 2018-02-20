import styled from 'styled-components'
import {
  minWidth,
  maxWidth,
  flex,
  color,
  fontSize,
  order,
  display
} from 'styled-system'
import tag from 'clean-tag'
import theme, { breakpoints } from '../theme'
import { get2 } from './spaceutil'
import PropTypes from 'prop-types'

const bp = p => get2('theme.breakpoints', breakpoints)(p)
const getBp = (indx, p) => bp(p)[indx] || indx + 'em'

export const minmaxProp = p => {
  const minWidth = p.min ? `(min-width:${getBp(p.min, p)})` : ''
  const maxWidth = p.max ? `(max-width:${getBp(p.max, p)})` : ''
  const and = minWidth && maxWidth ? 'and' : ''

  if (!p.min && !p.max) return 'display:block'

  return `@media ${minWidth} ${and} ${maxWidth}{display:block}`
}

const Break = styled(tag)([], { display: 'none' }, minmaxProp)

Break.defaultProps = {
  is: 'br'
}
Break.propTypes = {
  min: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ]),
  max: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.array
  ])
}

export default Break
