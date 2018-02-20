import tag from './clean-tag'
import styled from 'styled-components'
import theme from '../theme'
import PropTypes from 'prop-types'
import { display } from '../styles'

import { customStyle } from './spaceutil'

const canUseWidthOrHeight = val =>
  val > 0 || (typeof val === 'string' && val[0] !== '-')

const spaceX_ = val => {
  if (val === 0) return ['minWidth', 'width', 'marginLeft']

  return canUseWidthOrHeight(val) ? ['minWidth', 'width'] : ['marginLeft']
}

const spaceY_ = val => {
  if (val === 0) return ['minHeight', 'height', 'marginTop']

  return canUseWidthOrHeight(val) ? ['minHeight', 'height'] : ['marginTop']
}

const space = p => val => {
  if (p.x === true && !p.y) return spaceX_(val)

  if (!p.x && p.y === true) return spaceY_(val)

  if (!p.x && !p.y) {
    if (val === 0) {
      // if it equals 0 than we want to reset
      // but we don't know which prop was set
      // so we have to reset them all...

      return [
        'minWidth',
        'width',
        'marginLeft',
        'minHeight',
        'height',
        'marginTop'
      ]
    }

    return canUseWidthOrHeight(val)
      ? ['minWidth', 'width', 'minHeight', 'height']
      : ['marginLeft', 'marginTop']
  }
  return ''
}

const customizer = customStyle({
  prop: 'size',
  key: 'space',
  cssgetter: space,
  numberToPx: true
})

const Spacer = styled(tag)`
  ${display};
  ${customizer};
`

Spacer.displayName = 'Spacer'
Spacer.defaultProps = {
  theme: theme
}

Spacer.propTypes = {
  v: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  x: PropTypes.bool,
  y: PropTypes.bool
}
//Grid.Item = system('size', 'gridItems')

export default Spacer
//export const GridItem = system('size', 'gridItems')
