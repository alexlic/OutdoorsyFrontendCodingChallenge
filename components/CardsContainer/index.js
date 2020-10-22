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
            vehicle_make: vehicleMake,
            vehicle_model: vehicleModel,
            vehicle_year: vehicleYear,
            display_vehicle_type: vehicleType,
            price_per_day: price,
            score
          } = item.attributes
          const fullLocation = `${location.city}, ${location.state}`
          const description = `${`${vehicleYear}, `}${`${vehicleMake}, `}${vehicleModel}`
          return (
            <li key={item.id} className='card-item'>
              <Card
                id={item.id}
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
