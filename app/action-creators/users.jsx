import { RECEIVE_USERS } from '../constants'

export const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
})
