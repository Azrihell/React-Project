import React from 'react'


export const Card = (props: {name: string, email: string, id: number}) => {
  return (
    <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
      <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  )
}
