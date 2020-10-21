import React from 'react'
import Card from '../Card'

export default function ({ list }) {
  return (
    <div>
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
            <Card
              key={item.id}
              imageURL={imageURL}
              location={fullLocation}
              description={description}
              price={price}
              score={score}
              type={vehicleType}
            />
          )
        })
      }
    </div>
  )
}
