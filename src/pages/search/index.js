import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const Wrapper = styled.form`
  margin-bottom: 2rem;
  padding-left: 1rem;
`

function SearchForm({ setInputRef, onSearch }) {
  return (
    <Wrapper data-role="search-form">
      <SearchInput
        data-role="search-input"
        type="text"
        placeholder="e.g. Order"
        innerRef={setInputRef}
        onChange={onSearch}
      />
    </Wrapper>
  )
}

SearchForm.propTypes = {
  setInputRef: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired
}

SearchForm.defaultProps = {
  setInputRef: () => {},
  onSearch: () => {}
}

export default SearchForm
