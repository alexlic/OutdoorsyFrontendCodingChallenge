import React from 'react'

export default ({ imageURL, location, model, price, score, type }) => {
  return (
    <div>
      <div>
        <img source={imageURL} alt={model} />
      </div>
      <div>
        <p>{`${type} * ${location}`}</p>
        <p>{model}</p>
        <div>
          <p>{`$ ${price}`}</p>
          <p>{score}</p>
        </div>
      </div>
    </div>
  )
}
