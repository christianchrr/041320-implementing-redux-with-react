import React from 'react';
import Coin from './Coin'

import { addNickel, addPenny, addDime, addQuarter } from './redux/actions'

import { connect } from 'react-redux'

//if we know we need access to the Redux store (includes both STATE and DISPATCH), we need to use connect (which is like the consumer)

//import MessageContext from './context/context'
//import Grandparent from './context/Grandparent'

function createCoins(coins, actions){
    let components = []
    for (const coin in coins){
      components.push(<Coin key={coin} name={coin} count={coins[coin]} callback={actions[coin]}/>)
    }
    return components
}

function App(props) {
  console.log(props);
  return (
    <div>
      {createCoins(props.coins, props.actions)}
    </div>
  );
}

//This is the only time you should ever be passing props down now because of Redux

const mSTP = (stateFromReduxStore) => {
  return {coins: stateFromReduxStore}
}

const mDTP = (dispatchFromReduxStore) => {
  return {
    actions: {
      nickels: () => dispatchFromReduxStore(addNickel()),
      pennies: () => dispatchFromReduxStore(addPenny()),
      dimes: () => dispatchFromReduxStore(addDime()),
      quarters: () => dispatchFromReduxStore(addQuarter())
    }
  }
}

export default connect(mSTP, mDTP)(App);
//CONNECT TAKES TWO ARGUMENTS
//THE FIRST ARGUMENT IS A FUNCTION THAT WILL RECEIVE STATE FROM CONNECT AS AN ARGUMENT
//THE FUNCTION SHOULD RETURN AN OBJECT THAT WILL BE MERGED TO THIS COMPONENT'S PROPS
//THE CONVENTIONAL NAME FOR THIS FUNCTION IS MAPSTATETOPROPS (but you can obvs call it whatever you want)

//THE SECOND ARGUMENT IS CONVENTIONALLY NAMED MAPDISPATCHTOPROPS, BUT IF YOU DON'T PROVIDE IT, CONNECT WILL AUTOMATICALLY PUT THE DISPATCH FUNCTION IN PROPS FOR YOU TO USE
//MAPDISPATCH TO PROPS IS A FUNCTION THAT WILL RECEIVE DISPATCH AS AN ARGUMENT, AND IT WILL ALLOW US TO COMPOSE AN OBJECT THAT WILL BE MAPPED TO PROPS WITH OUR ACTION CREATORS WRAPPED IN A DISPATCH INVOCATION

//connect returns a function that receives a component as an argument
//in other words, connect returns a HOC
//that returned function will pass any information we need from the Redux store's state OR an wrapped action creators to our component as props

//the parentheses around the component's name invoke the function that connect returns
