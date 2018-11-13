import { actions } from 'entities/config'
import { call, put } from 'redux-saga/effects'

function* fetch() {
  try {
    const config = yield call(fetchConfig)
    yield put(actions.set(config))
  } catch (err) {}
}

const fetchConfig = () => {
  return Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ lang: 'vn' })
    }, 1000)
  })
}

export default { fetch }
