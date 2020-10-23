import React from 'react'

export default function ({ images }) {
  return (
    <div className='row col-md-12 image-viewer_container'>
      <img className='main-image col-md-6' src={images[0]} />
      <img className='secondary-image col-md-6' src={images[1]} />
    </div>
  )
}
