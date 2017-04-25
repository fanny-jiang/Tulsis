import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants'

const initialProductState = {
  favorited: [],
  selected: {},
  productsList: []
}

export default function(state = initialProductState, action) {
  // const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_PRODUCTS:
    return {...state, productsList: action.products}
    // return Object.assign({}, state, {productsList: action.products})
    // newState.productsList = action.products
    // break

  case RECEIVE_PRODUCT:
    return {...state, selected: action.product}
    // newState.selected = action.product
    // break

  default:
    return state
  }

  // return newState
}
