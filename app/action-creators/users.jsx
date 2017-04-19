import { RECEIVE_USERS } from '../constants'

export const receiveProducts = users => ({
  type: RECEIVE_USERS,
  users
})
