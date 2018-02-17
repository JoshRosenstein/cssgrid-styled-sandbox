import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Grid, GridItem } from '../components'

const Item = styled(GridItem)`
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
`

const Page2 = () => (
  <Fragment>
    <div>
      <h2>
        Grid Items-
        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout">
          Example From Mozilla
        </a>
      </h2>
    </div>
    <Grid
      templateColumns="repeat(3, 1fr)"
      gap="10px"
      autoRows="minmax(100px, auto)"
    >
      <Item column="1/3" row="1">
        One
      </Item>
      <Item column="2/4" row="1/3">
        Two
      </Item>
      <Item column="1" row="2/5">
        Three
      </Item>
      <Item column="3" row="3">
        Four
      </Item>
      <Item column="2" row="4">
        Five
      </Item>
      <Item column="3" row="4">
        Six
      </Item>
    </Grid>
  </Fragment>
)

export default Page2
