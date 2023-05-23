import React from 'react'

export const SearchBox = (props: {searchField: string, setSearchField: any}) => {
  return (
    <div>
      <input value={props.searchField} className='bg-lightest-blue dib br3 pa3 ma2' type='search' placeholder='Search Friends' onChange={(e:any) => props.setSearchField(e.target.value)} />
    </div>
  )
}