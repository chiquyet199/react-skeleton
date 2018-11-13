import { combineReducers } from 'redux'
import { reducer as config } from 'entities/config'

export function init() {
  const reducers = combineReducers({ config })
  return reducers
}
