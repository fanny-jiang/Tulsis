import { RECEIVE_PRODUCTS } from '../constants'

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
  default:
    return state
  }
  return newState
}
