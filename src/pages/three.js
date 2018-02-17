import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Grid, GridItem } from '../components'

const Item = styled(GridItem)`
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
`

const Page3 = () => (
  <Fragment>
    <div>
      <h2>
        Nested Grid-
        <a href="https://gridbyexample.com/examples/example21/">
          Grid By Example
        </a>
      </h2>
    </div>
    <Grid
      templateColumns="repeat(4, [col] 150px )"
      gap="10px"
      autoRows="repeat(2, [row] auto  )"
      bg="#fff"
      color="#444"
    >
      <Item column="col / span 2" row="row">
        One
      </Item>
      <Item column="col 3 / span 2" row="row">
        Two
      </Item>
      <Item column="col / span 2" row="row 2">
        Three
      </Item>
      <Item column="col 3 / span 2" row="row 2">
        <Grid templateColumns="1fr 1fr" gap="10px">
          <Item column="1 / 3" row="1">
            Four
          </Item>
          <Item column="1" row="2">
            Five
          </Item>
          <Item column="2" row="2">
            Six
          </Item>
        </Grid>
      </Item>
    </Grid>
  </Fragment>
)

export default Page3
