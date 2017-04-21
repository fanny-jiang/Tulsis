import { RECEIVE_SPINFO } from '../constants'

const initialState = {
  spInfo: {}
}
export default function(state = initialState, action) {
  const newState = Object.assign({}, state)
  switch (action.type) {
  case RECEIVE_SPINFO:
    newState.spInfo = action.info
    break
  default:
    return state
  }
  return newState
}
