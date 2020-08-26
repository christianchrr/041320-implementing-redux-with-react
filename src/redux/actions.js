const NICKEL = "NICKEL"
const DIME = "DIME"
const PENNY = "PENNY"
const QUARTER = "QUARTER"

//FUNCTIONS ARE ACTION CREATORS || THE OBJECTS THEMSELVES ARE ACTIONS
export const addNickel = () => ({type: NICKEL})
export const addDime = () => ({type: DIME})
export const addPenny = () => ({type: PENNY})
export const addQuarter = () => ({type: QUARTER})
