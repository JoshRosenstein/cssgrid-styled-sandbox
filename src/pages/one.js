import React, { Fragment } from 'react'
import styled from 'styled-components'
//import { Grid, GridItem } from '../components'
import { Grid } from '../components'
import { space } from 'styled-system'
import theme from '../theme'
import { Item, spacing } from './shared'

const Gtemplate = {
  mobile: `
        "Header"  auto
        "Menu"    auto
        "Content" 1fr
        "Sidebar" auto
        "Footer"  auto
        / auto
      `,
  tablet: `
        "Header  Header"  auto
        "Menu    Content" 1fr
        "Sidebar Sidebar" auto
        "Footer  Footer"  auto
        / 10rem 1fr
      `,
  desktop: `
        "Header Header  Header"  auto
        "Menu   Content Sidebar" 1fr
        "Menu   Footer  Sidebar" auto
        / 10rem 1fr 10rem
      `
}

///TODO media query gets over written when using responsive grid
const Page1 = () => (
  <Fragment>
    <h2>Grid using Template</h2>
    <Grid
      gap={spacing}
      template={[Gtemplate.mobile, Gtemplate.tablet, Gtemplate.desktop]}
      height="75vh"
    >
      <Grid.Item is={Item} area="Header">
        Header
      </Grid.Item>
      <Grid.Item is={Item} area="Menu">
        Menu
      </Grid.Item>
      <Grid.Item is={Item} area="Content">
        Content
      </Grid.Item>
      <Grid.Item is={Item} area="Sidebar">
        Sidebar
      </Grid.Item>
      <Grid.Item is={Item} area="Footer">
        Footer
      </Grid.Item>
    </Grid>
  </Fragment>
)
export default Page1
