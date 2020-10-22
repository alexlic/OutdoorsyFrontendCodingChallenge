import React, { useState } from 'react'
import Button from '../Button'

function SearchBar () {
  return (
    <div className='search-bar'>
      <div>
        <p className='search-bar_title'>Filter</p>
      </div>
      <div className='form-row'>
        <div className='col-md-4'>
          <input type='text' className='form-control' />
        </div>
        <div className='col-md-2'>
          <Button
            name='filter'
            onClick={() => {}}
            className='btn btn-success search-bar_button'
          >
            Filter
          </Button>
        </div>
      </div>
    </div>
  )
}
export default SearchBar
