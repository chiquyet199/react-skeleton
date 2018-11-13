import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { init as reducersInit } from './reducers'
import mySaga from 'sagas'

let store
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(logger)
}

const init = () => {
  const reducers = reducersInit()
  store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middlewares)),
  )
  sagaMiddleware.run(mySaga)
}

export { init, store }
