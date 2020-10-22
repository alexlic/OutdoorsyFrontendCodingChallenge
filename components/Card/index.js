import React from 'react'
import Link from 'next/link'

export default ({ id, imageURL, location, description, price, score, type }) => {
  const cardHeader = `${type} • ${location}`.toUpperCase()

  const generateRatingStarts = (score) => {
    const stars = []
    const yellowStar = (<span className='score_yellow-star'>★</span>)
    const blankStar = (<span className='score_blank-star'>☆</span>)
    for (let i = 1; i <= 5; i++) {
      if (i <= score) stars.push(yellowStar)
      else stars.push(blankStar)
    }
    return stars
  }
  const ratingStars = generateRatingStarts(score)

  return (
    <Link href='/rental/[rental]' as={`/rental/${id}`}>
      <a className='row card-row col-md-12'>
        <div className='card_image-section'>
          <img src={imageURL} alt={description} className='card-image' />
        </div>
        <div className='card_info-section'>
          <p className='card_header'>{cardHeader}</p>
          <p className='card_description'>{description.toUpperCase()}</p>
          <div className='card-details'>
            <p>{`$ ${price}`}</p>
            <div className='card_score-stars'>
              {ratingStars}
            </div>
            <p className='card_score-number'>{`(${score})`}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}
