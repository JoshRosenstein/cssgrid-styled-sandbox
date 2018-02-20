import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Columns, GridItem, Box, Spacer } from '../components'
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

const spacing = [2, 3, 4]

const ColumnsDemo = () => (
  <Fragment>
    <h3>width</h3>

    <Columns columnWidth={200} gap={spacing}>
      <Item />
      <Item />
      <Item />
    </Columns>

    <Spacer />

    <h3>count</h3>
    <Columns columnCount={[1, 2, 3]} gap={spacing}>
      <Columns.Item>
        <Item />
      </Columns.Item>
      <Columns.Item>
        <Item />
      </Columns.Item>
      <Columns.Item>
        <Item />
      </Columns.Item>
    </Columns>
  </Fragment>
)

export default ColumnsDemo
