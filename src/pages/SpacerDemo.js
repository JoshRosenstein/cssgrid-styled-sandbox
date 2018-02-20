import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Columns, Grid, Box, Spacer as SPCR } from '../components'
import { space } from 'styled-system'
import theme from '../theme'

const Spacer = SPCR.extend`
  background-color: coral;
`
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
  flex-wrap: wrap;
`
Item.defaultProps = {
  px: '1rem',
  theme: theme
}

const spacing = [2, 3, 4]

const SpacerDemo = () => (
  <Fragment>
    <div>
      <h2>TODO: Better Spacer Test</h2>
    </div>
    <Grid
      templateColumns="repeat(4, [col] 150px )"
      autoRows="repeat(2, [row] auto  )"
      bg="#fff"
      color="#444"
    >
      <Item column="col / span 2" row="row">
        One
      </Item>
      <Spacer x />
      <Item column="col 3 / span 2" row="row">
        Two
      </Item>

      <Item column="col / span 2" row="row 2">
        Three
      </Item>
      <Spacer size={8} y display="inline-block" />
      <Item column="col 3 / span 2" row="row 2">
        Three
      </Item>
      <Spacer size={5} y display="inline-block" />
      <Item column="col 3 / span 2" row="row 2">
        Three
      </Item>
    </Grid>
  </Fragment>
)

export default SpacerDemo
