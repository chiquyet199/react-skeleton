import { SET } from 'store/actions/config'

const initialState = {}

const actionHandlers = {}

actionHandlers[SET] = ({ payload }) => {
  return payload
}

export default (state = initialState, action) => {
  var handler = actionHandlers[action.type]
  if (handler) return handler({ state, payload: action.payload })
  return state
}
