import { takeEvery } from 'redux-saga'
import { types as configTypes } from 'entities/config'
import xx from './config'

export default function* rootSaga() {
  yield [takeEvery(configTypes.FETCH, xx.fetch)]
}
