import React, { Component } from 'react'
import { withRouter } from "next/router"
import ImageViewer from '../../components/ImageViewer'
import { fetchByID } from '../../sources/rentals'

class Rental extends Component{
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      images: [],
      userInfo: {
        urlImg: '',
        name: ''
      },
      rentalInfo: {
        location: '',
        description: '',
        price: 0
      }
    }
  }

  componentDidMount() {
    const { rental } = this.props.router.query
    this.setState({ id: rental })
    fetchByID(rental)
      .then(({ data }) => {
          const {
            location: {
              city, state
            },
            vehicle_make: vehicleMake,
            vehicle_model: vehicleModel,
            vehicle_year: vehicleYear,
            display_vehicle_type: type,
            price_per_day: price,
          } = data.data.attributes
          const location = `${type} • ${city}, ${state}`
          const description = `${`${vehicleYear}, `}${`${vehicleMake}, `}${vehicleModel}`
          const images = data.included.filter(item => item.type === 'images')
          const [userInfo] = data.included.filter(item => item.type === 'users')
          const mainImageURL = images[0].attributes.url
          const secondaryImageURL = images[1].attributes.url
          this.setState({
            data: data,
            images: [mainImageURL,secondaryImageURL],
            userInfo: {
              urlImg: userInfo.attributes.avatar_url,
              name: `${userInfo.attributes.first_name} ${userInfo.attributes.last_name}`
            },
            rentalInfo: {
              location: location,
              description: description,
              price: price
            }
          })
        })
      .catch(err => console.error('error fetching rental info: ', err))
  }

  render() {
    return (
      <div className='rental-page'>
        <ImageViewer
          images={this.state.images}
        />
        <div className='rental-details'>
          <div>
            <p className='rental_location_info'>{this.state.rentalInfo.location}</p>
            <p className='rental_vehicle-info'>{this.state.rentalInfo.description}</p>
            <div className='rental_user-info'>
              <img className='profile-image' src={this.state.userInfo.urlImg}></img>
              <p className='profile-name'>{this.state.userInfo.name}</p>
            </div>
          </div>
          <div className='rental-price'>
            {`$${this.state.rentalInfo.price}`}
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Rental)
