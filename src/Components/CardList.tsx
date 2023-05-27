import react from 'react'
import { Card } from './Card'

export const CardList = (props: { robots: any }) => {
  const cardArray = props.robots.map((user, i) => {
    return (<Card
      key={i}
      id={props.robots[i].id}
      name={props.robots[i].name}
      email={props.robots[i].email} />
    )
  })
  return (
    <div>
      {cardArray}
    </div>
  )
}