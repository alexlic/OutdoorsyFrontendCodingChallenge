import React, { useRef, useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CardsContainer from '../components/CardsContainer'
import { fetchList } from '../sources/rentals'
import Button from '../components/Button'

export default function Home () {
  const limitOfItems = useRef(8)
  const [list, setList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const filter = useRef('')
  const showLoadButton = useRef(true)

  const fetchOptions = {
    'filter[type]': 'camper-van',
    address: 'san francisco',
    'page[limit]': limitOfItems.current
  }

  useEffect(() => {
    let isSubscribed = true
    fetchList(fetchOptions)
      .then(({ data: { data } }) => {
        if (isSubscribed) {
          setList(data)
          setFilteredList(data)
        }
      })
      .catch(err => console.error('error fetching rental list: ', err))
    return () => (isSubscribed = false)
  }, [])

  const handleOnClick = () => {
    limitOfItems.current += 8
    fetchList(fetchOptions)
      .then(({ data: { data } }) => {
        setList(data)
        setFilteredList(data)
      })
      .catch(err => console.error('error fetching rental list: ', err))
  }

  const handleOnClickFilter = () => {
    if (filter.current !== '') {
      setFilteredList(list => list.filter(({ attributes }) => {
        const {
          location: {
            city, state
          },
          vehicle_make: vehicleMake,
          vehicle_model: vehicleModel,
          display_vehicle_type: vehicleType
        } = attributes
        return city.toLowerCase().includes(filter.current.toLowerCase()) ||
          state.toLowerCase().includes(filter.current.toLowerCase()) ||
          vehicleMake.toLowerCase().includes(filter.current.toLowerCase()) ||
          vehicleModel.toLowerCase().includes(filter.current.toLowerCase()) ||
          vehicleType.toLowerCase().includes(filter.current.toLowerCase())
      }))
      showLoadButton.current = false
    } else {
      setFilteredList(list)
      showLoadButton.current = true
    }
  }

  const handleOnChange = ({ target }) => {
    filter.current = target.value
  }

  return (
    <div className='max-w-screen-xl mx-auto mt-8'>
      <h1 className='main-title'>Campervans</h1>
      <section>
        <SearchBar
          onChange={handleOnChange}
          onClick={handleOnClickFilter}
        />
      </section>
      <section>
        {list && <CardsContainer list={filteredList} />}
      </section>
      <section className='load-more_section'>
        {
          showLoadButton.current &&
            <Button
              name='loadMore'
              onClick={handleOnClick}
              className='btn btn-success'
            >
              Load More
            </Button>
        }
      </section>
    </div>
  )
}
