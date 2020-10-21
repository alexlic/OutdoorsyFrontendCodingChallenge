import React from 'react'
import SearchBar from '../components/SearchBar'
import CardsContainer from '../components/CardsContainer'

export default function Home () {
  const list = ''
  return (
    <div className='max-w-screen-xl mx-auto mt-8'>
      <h1 className='text-5xl font-black text-gray-600'>Campervans</h1>
      <section>
        <SearchBar />
      </section>
      <section>
        {list && <CardsContainer list={list} /> }
      </section>
    </div>
  )
}
