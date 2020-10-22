import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CardsContainer from '../components/CardsContainer'
import { fetchList } from '../sources/rentals'
import Button from '../components/Button'

export default function Home () {
  const [list, setList] = useState([])
  const [limitOfItems, setLimitOfItems] = useState(8)

  const fetchOptions = {
    'filter[type]': 'camper-van',
    address: 'san francisco',
    'page[limit]': limitOfItems
  }

  useEffect(() => {
    fetchList(fetchOptions)
      .then(({ data: { data } }) => setList(data))
      .catch(err => console.error('error fetching rental list: ', err))
  }, [])

  const handleOnClick = () => {
    setLimitOfItems(limitOfItems + 8)
    fetchList(fetchOptions)
      .then(({ data: { data } }) => setList(data))
      .catch(err => console.error('error fetching rental list: ', err))
  }

  return (
    <div className='max-w-screen-xl mx-auto mt-8'>
      <h1 className='main-title'>Campervans</h1>
      <section>
        <SearchBar />
      </section>
      <section>
        {list && <CardsContainer list={list} />}
      </section>
      <section>
        <Button
          name='loadMore'
          onClick={handleOnClick}
          className='btn btn-success'
        >
          Load More
        </Button>
      </section>
    </div>
  )
}
