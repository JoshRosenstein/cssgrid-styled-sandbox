import React from 'react'
import filterReactProps from './Filterprops'

const Box = ({ is: Component = 'div', width, height, ...props }) => (
  <Component {...filterReactProps(props)} />
)

Box.is = is => props => <Box is={is} {...props} />

export default Box
