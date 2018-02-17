import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Grid, GridItem } from '../components'
const Item = styled(GridItem)`
  background-color: rgba(68, 68, 68, 0.1);
  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #6a5acd;
`

const Page1 = () => (
  <Fragment>
    <h2>Grid using Template</h2>
    <Grid
      template={`
        "Header Header  Header"  .2fr
        "Menu   Content Sidebar" 1fr
        "Footer   Footer  Footer" .2fr
        / 10rem 1fr 10rem
      `}
      height="75vh"
    >
      <Item area="Header">Header</Item>
      <Item area="Menu">Menu</Item>
      <Item area="Content">Content</Item>
      <Item area="Sidebar">Sidebar</Item>
      <Item area="Footer">Footer</Item>
    </Grid>
  </Fragment>
)
export default Page1
