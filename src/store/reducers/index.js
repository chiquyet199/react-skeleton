import { combineReducers } from 'redux'
import config from './config'

export function init() {
  const reducers = combineReducers({ config })
  return reducers
}
