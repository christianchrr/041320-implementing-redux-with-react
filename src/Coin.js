import React from 'react'

export default function Coin(props){

  return (
    <div>
    <h2>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}:</h2>
      Count: <span id={`${props.name}-count`}>{props.count}</span>
      <br />
      <br />
      <button onClick={props.callback}>Add to {props.name}</button>
    </div>
  )
}
