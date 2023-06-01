import React from 'react'

export const SearchBox = (props: {searchField: string, setSearchField: any}) => {
  return (
    <div className='SearchBox'>
      <input value={props.searchField} className='bg-white br3 pa3 ma2 b--white-10 gray fw6' type='search' placeholder='Search Friends' onChange={(e:any) => props.setSearchField(e.target.value)} />
    </div>
  )
}