import React, { Fragment } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link, Redirect } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import {
  Page1,
  Page2,
  Page3,
  Page4,
  Playground,
  styleLookup,
  FlexDemo,
  ColumnsDemo,
  SpacerDemo
} from './pages'
import { Grid } from './components'
import { space, color } from './styles'
import theme from './theme'
injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
   
  }
`

const AppStyles = styled.div`
  background-color: rgba(68, 68, 68, 0.1);
  a {
    text-decoration: none;
    color: #c5c7cb;
  }
  nav {
    width: 100%;
    white-space: nowrap;
    -webkit-tap-highlight-color: transparent;
    padding-left: 0.5rem;

    a {
      color: #e7e7e7;
      padding: 1rem;
      display: block;
    }
  }
  .content {
    padding: 1rem;
  }
  img {
    max-width: 100%;
  }
`

const Gtemplate = {
  mobile: `
   "hd" auto
   "mn" 1fr
   "sd" auto
   /auto
      `,
  tablet: `
   "hd hd " auto
   "sd mn " 1fr
   "ft ft " auto
   /25% 1fr 
      `,
  desktop: `
   "hd hd hd" auto
   "sd mn ." 1fr
   "ft ft ft" auto
   /10% 1fr auto
      `
}

const spacing = [2, 3, 4]
const Item = styled.div`
  ${space};
  ${color};
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;

  border: 2px solid rgba(68, 68, 68, 0.3);
  color: #5a738e;
`

Item.defaultProps = {
  px: '.5rem',
  theme: theme
}
//#F7F7F7"
// templateRows = '80px 1fr 50px'
// templateColumns = '15% 1fr 18%'
const App = () => (
  <BrowserRouter>
    <AppStyles>
      <Fragment>
        <Grid
          bg="#F7F7F7"
          template={[Gtemplate.mobile, Gtemplate.tablet, Gtemplate.desktop]}
          height="100vh"
        >
          <Grid.Item is={Item} bg="#EDEDED" area="hd">
            Header
          </Grid.Item>
          <Grid.Item bg="#2A3F54" area="sd">
            <nav>
              <Link to="/1">Grid Template</Link>
              <Link to="/2">Grid Items</Link>
              <Link to="/3">Nested</Link>
              <Link to="/4">Alignment</Link>
              <Link to="/stylelookup">Styles</Link>
              <Link to="/flexdemo">Flex</Link>
              <Link to="/columns">Columns</Link>
              <Link to="/spacer">Spacer</Link>
              <Link to="/dev">Dev</Link>
            </nav>
          </Grid.Item>
          <Grid.Item m="1rem" area="mn" bg="white" color="#73879C">
            <Switch>
              <Route exact path="/" render={() => <Redirect to="/1" />} />
              <Route path="/1" exact component={Page1} />
              <Route path="/2" exact component={Page2} />
              <Route path="/3" exact component={Page3} />
              <Route path="/4" exact component={Page4} />
              <Route path="/stylelookup" exact component={styleLookup} />
              <Route path="/flexdemo" exact component={FlexDemo} />
              <Route path="/columns" exact component={ColumnsDemo} />
              <Route path="/spacer" exact component={SpacerDemo} />
              <Route path="/dev" exact component={Playground} />
            </Switch>
          </Grid.Item>

          <Grid.Item is={Item} bg="#fff" area="ft">
            Footer
          </Grid.Item>
        </Grid>
      </Fragment>
    </AppStyles>
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))
