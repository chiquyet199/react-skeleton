import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH, FETCH_FAIL, FETCH_SUCCESS } from 'store/actions/config'
const Api = {
  fetchConfig: () => {
    return Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ hello: 'world' })
      }, 2000)
    })
  },
}

function* fetchConfig(action) {
  try {
    const user = yield call(Api.fetchConfig, action.payload)
    yield put({ type: FETCH_SUCCESS, user: user })
  } catch (e) {
    yield put({ type: FETCH_FAIL, message: e.message })
  }
}

function* mySaga() {
  yield takeLatest(FETCH, fetchConfig)
}

export default mySaga
