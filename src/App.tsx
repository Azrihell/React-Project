import React from 'react'
import { CardList } from './CardList'
import { robots } from './robots'
import { SearchBox } from './SearchBox'

export const App = () => {
  return (
    <div className='tc'>
      <h1>RoboFriends!</h1>
      <SearchBox/>
      <CardList/>
    </div>
  )
}