export default function counterReducer(state={nickels: 5, quarters: 2, pennies: 10, dimes: 1}, action){
  switch (action.type) {
    case 'NICKEL':
      return {...state, nickels: state.nickels + 1}
    case 'PENNY':
      return {...state, pennies: state.pennies + 1}
    case 'DIME':
      return {...state, dimes: state.dimes + 1}
    case 'QUARTER':
      return {...state, quarters: state.quarters + 1}
    case 'message':
      return {...state, message: action.payload}
    default:
      return state;
  }
}
