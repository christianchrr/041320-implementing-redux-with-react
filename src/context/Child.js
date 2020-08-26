import React from 'react'
import MessageContext from './context'

export default function Child(){
  return(
    <MessageContext.Consumer>
      {function(value) {
        return (<div>I'm the Child with a secret message: {value}</div>)
      }}
    </MessageContext.Consumer>
  )
}
