import { RECEIVE_PRODUCTS, RECEIVE_PRODUCT } from '../constants'

const initialProductState = {
  favorited: [],
  selected: {},
  productsList: []
}

export default function(state = initialProductState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_PRODUCTS:
    newState.productsList = action.products
    break

  case RECEIVE_PRODUCT:
    newState.selected = action.product
    break

  default:
    return state
  }

  return newState
}
