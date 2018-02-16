import React, { Fragment } from 'react'
import styled from 'styled-components'
import Grid from '../Grid'
import { backgroundImage } from 'styled-system'

const Wrapper = styled.div`
  margin: 40px;
  font: 80% Arial, Helvetica, sans-serif;
  background: no-repeat
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/grid.png);
`

const Item = styled(Grid.Item)`
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
  padding: 20px;
`

const Page4 = () => (
  <Fragment>
    <h2>
      Box alignment align-items-
      <a href="https://gridbyexample.com/examples/example24/">
        Grid by Example
      </a>
    </h2>
    <Wrapper>
      <Grid
        templateColumns="repeat(6, 150px)"
        templateRows="repeat( 4, 150px);"
        gap="10px"
        alignItems="center"
      >
        <Item column="1/3" row="1/3">
          One
        </Item>
        <Item column="3/5" row="1/3">
          Two
        </Item>
        <Item column="1/3" row="3/6">
          Three
        </Item>
        <Item column="3/5" row="3/6">
          Four
        </Item>
        <Item column="5/7" row="1/6" alignSelf="stretch">
          <p>
            Each of the boxes on the left has a grid area of 3 columns and 3
            rows (we're counting the gutter col/row).{' '}
          </p>
          <p>
            The align-items property is used to align the content inside each
            grid-area.
          </p>
          <p>Other values of align-items are:</p>
          <ul>
            <li>stretch</li>
            <li>start</li>
            <li>end</li>
            <li>center</li>
          </ul>
        </Item>
      </Grid>
    </Wrapper>
  </Fragment>
)

export default Page4
