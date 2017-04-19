import { RECEIVE_REVIEWS } from '../constants'

const initialReviewState = {
  selected: {},
  reviewsList: []
}

export default function(state = initialReviewState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_REVIEWS:
    newState.productsList = action.reviews
    break
  default:
    return state
  }
  return newState
}
