import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import styled, { injectGlobal } from 'styled-components'
import { Page1, Page2, Page3, Page4 } from './pages'
//import styles from './styles'

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
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    width: 100%;
    background: #108db8;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 1rem;
  }
  img {
    max-width: 100%;
  }
`

const Default = () => <div>Default Page</div>

const App = () => (
  <BrowserRouter>
    <AppStyles>
      <nav>
        <Link to="/1">Grid Template</Link>
        <Link to="/2">Grid Items</Link>
        <Link to="/3">Nested</Link>
        <Link to="/4">Alignment</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Page1} />
        <Route path="/1" exact component={Page1} />
        <Route path="/2" exact component={Page2} />
        <Route path="/3" exact component={Page3} />
        <Route path="/4" exact component={Page4} />
      </Switch>
    </AppStyles>
  </BrowserRouter>
)

render(<App />, document.getElementById('root'))
