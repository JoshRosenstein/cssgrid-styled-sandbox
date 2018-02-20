import React, { Fragment } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Break, Grid, Box } from '../components'
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
  flex-wrap: wrap;
`
Item.defaultProps = {
  px: '1rem',
  theme: theme
}

const spacing = [2, 3, 4]

const Playground = () => (
  <Fragment>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga quae quam
      reiciendis assumenda vero, molestias, quasi necessitatibus{' '}
      <Break max={1} />
      earum repudiandae architecto error distinctio omnis iure laboriosam
      <Break min={500} />
      tempora nemo similique! Aliquam.
    </p>
    <Break min={1} />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fuga quae quam
      reiciendis assumenda vero, molestias, quasi necessitatibus
    </p>
  </Fragment>
)

export default Playground
