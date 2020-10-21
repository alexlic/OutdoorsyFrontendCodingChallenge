import React, { useState } from 'react'
import Button from '../Button'

function SearchBar () {
  const className = ''
  return (
    <div>
      <div>
        <p>Filter</p>
      </div>
      <div>
        <input type='text' />
        <Button
          name='filter'
          onClick={() => {}}
          className={className}
        >
          Filter
        </Button>
      </div>
    </div>
  )
}
export default SearchBar
