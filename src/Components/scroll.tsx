import React from 'react'

export const Scroll = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid white', height: '800px' }}>
      {props.children}
    </div>
  )
}