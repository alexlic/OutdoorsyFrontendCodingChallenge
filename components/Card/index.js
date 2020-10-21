import React from 'react'

export default ({ imageURL, location, description, price, score, type }) => {
  return (
    <div>
      <div>
        <img src={imageURL} alt={description} />
      </div>
      <div>
        <p>{`${type} * ${location}`}</p>
        <p>{description}</p>
        <div>
          <p>{`$ ${price}`}</p>
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}
