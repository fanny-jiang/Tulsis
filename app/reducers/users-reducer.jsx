import { RECEIVE_USERS } from '../constants'

const initialUserState = {
  selected: {},
  userList: []
}

export default function(state = initialUserState, action) {
  const newState = Object.assign({}, state)

  switch (action.type) {
  case RECEIVE_USERS:
    newState.userList = action.users
    break
  default:
    return state
  }
  return newState
}
