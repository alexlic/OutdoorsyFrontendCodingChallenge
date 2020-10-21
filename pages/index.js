import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import CardsContainer from '../components/CardsContainer'
import { fetchList } from '../sources/rentals'

export default function Home () {
  const [list, setList] = useState([])

  const fetchOptions = {
    'filter[type]': 'camper-van',
    address: 'san francisco',
    'page[limit]': 8
  }

  useEffect(() => {
    fetchList(fetchOptions)
      .then(({ data: { data } }) => setList(data))
      .catch(err => console.error('error fetching rental list: ', err))
  }, [])

  return (
    <div className='max-w-screen-xl mx-auto mt-8'>
      <h1 className='text-5xl font-black text-gray-600'>Campervans</h1>
      <section>
        <SearchBar />
      </section>
      <section>
        {list && <CardsContainer list={list} />}
      </section>
    </div>
  )
}
