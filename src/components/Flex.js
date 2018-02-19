import React from "react"
import system from '../system'
import R from 'ramda'
import { responsiveStyle } from 'styled-system'
import { flexContainer, flexGap, flexGapPadding, color, size, overflow, propTypes, textAlign } from '../styles'
import cleanElement from 'clean-element'
import tag from './clean-tag'
import styled from 'styled-components'
import theme from '../theme'



const convertNeg = values => {
  if (R.isNil(values)) return values

  const convertLoop = (val, key, obj) => {
    //need to add logic to ignore percentages
    if (R.type(val) === 'Object' || R.type(val) === 'Array')
      return R.map(convertLoop, val)

    return `-${val}`
  }

  return R.map(convertLoop, values)
}

const convertWrapper = func => p => convertNeg(func(p))

const Flex = styled(tag) `
${color}
${size}
${overflow}
${textAlign}
  ${flexContainer};
    min-width: inherit;
    width: inherit;
    max-width: inherit;
    min-height: inherit;
    height: inherit;
    max-height: inherit;
    display: flex;
    ${convertWrapper(flexGap)};
    > * {
      ${p => (p.gapType === 'padding' ? flexGapPadding : flexGap)};
     box-sizing:border-box;
    }
  
`
Flex.displayName = 'Flex'

Flex.defaultProps = {
  theme:theme
}

Flex.propTypes = {
  ...propTypes.textAlign,
  ...propTypes.color,
  ...propTypes.size,
  ...propTypes.overflow,
  ...propTypes.flexContainer,
  ...propTypes.flexGap,
  ...propTypes.flexGapPadding,
}

// const Flex = Box2.extend`
//     min-width: inherit;
//     width: inherit;
//     max-width: inherit;
//     min-height: inherit;
//     height: inherit;
//     max-height: inherit;
//     display: flex;
//     ${convertWrapper(flexGap)};
//     > * {
//       ${p => (p.gapType === 'padding' ? flexGapPadding : flexGap)};
//      box-sizing:border-box;
//     }
  
// `
// Flex.defaultProps={
//   theme: theme
// }
// Flex.displayName = 'Flex'

Flex.Item = system('color', 'size', 'flexItem')
Flex.Item.defaultProps = {
  theme: theme
}
export default Flex



// const FlexBase = system('color', 'size', 'overflow', 'flexContainer',{
//   theme:theme,
//   flexGap:0
// })
