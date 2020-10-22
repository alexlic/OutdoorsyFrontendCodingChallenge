import React from 'react'
import Card from '../Card'

export default function ({ list }) {
  return (
    <ul className='card_container'>
      {
        list.map(item => {
          const {
            primary_image_url: imageURL,
            location,
            description,
            display_vehicle_type: vehicleType,
            price_per_day: price,
            score
          } = item.attributes
          const fullLocation = `${location.city}, ${location.state}`
          return (
            <li key={item.id} className='card-item'>
              <Card
                imageURL={imageURL}
                location={fullLocation}
                description={description}
                price={price}
                score={score}
                type={vehicleType}
              />
            </li>
          )
        })
      }
    </ul>
  )
}
