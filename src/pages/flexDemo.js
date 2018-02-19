import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Flex, GridItem } from '../components'
import { space } from 'styled-system'
import theme from '../theme'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: Roboto, sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  button {
    font: inherit;
  }
`

const Item = styled.div`
  ${space} display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background-color: #ddd;
`
Item.defaultProps = {
  px: '1rem',
  theme: theme
}
// mobileSm: '100%',
//   tabletSm: '50%',
//     laptopSm: '33.333%'

const itemBasis = ['100%', '50%', '33.33%']
const spacing = [2, 3, 4]
const FlexDemo = () => (
  <Fragment>
    <h3>width</h3>
    <Flex wrap gapType="padding" gap={spacing}>
      <Flex.Item width={itemBasis}>
        <Item>1</Item>
      </Flex.Item>
      <Flex.Item width={itemBasis}>
        <Item>2</Item>
      </Flex.Item>
      <Flex.Item width={itemBasis}>
        <Item>3</Item>
      </Flex.Item>
    </Flex>

    <br />
    <br />
    <Flex column middle right height={200}>
      <Flex.Item>
        <Item>Lorem ipsum</Item>
      </Flex.Item>
    </Flex>
  </Fragment>
)

export default FlexDemo
