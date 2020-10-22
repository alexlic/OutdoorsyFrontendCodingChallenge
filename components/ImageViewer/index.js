import React from 'react'

export default function ({ image }) {
  return (
    <div className='image-viewer_container'>
      <img src={image} />
    </div>
  )
}
