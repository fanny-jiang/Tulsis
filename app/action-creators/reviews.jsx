import { RECEIVE_REVIEWS } from '../constants'

export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})
