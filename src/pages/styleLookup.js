import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Flex, GridItem } from '../components'
import SearchForm from './search'
import { StyleProps } from '../styles'
let styles = StyleProps

function searchStyles(searchTerm) {
  return styles.filter(function(user) {
    return user.name.toLowerCase().match(searchTerm)
  })
}
class Search extends React.Component {
  state = {
    styles1: styles
  }

  handleSubmit = event => {
    event.preventDefault()
    this.setState({
      styles1: searchStyles(this.searchInput.value)
    })
  }

  render() {
    let _styles = this.state.styles1

    return (
      <div>
        <SearchForm
          setInputRef={input => {
            this.searchInput = input
          }}
          onSearch={this.handleSubmit}
        />
        <ul>
          {_styles.map(l => {
            return (
              <li>
                {l.name}
                <ul>
                  {l.props.map(p => {
                    return <li>{p}</li>
                  })}
                </ul>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const styleLookup = () => (
  <Fragment>
    <Search />
  </Fragment>
)

export default styleLookup
