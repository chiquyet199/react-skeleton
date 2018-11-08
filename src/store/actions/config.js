export const SET = 'config/SET'
export const FETCH = 'config/FETCH'
export const FETCH_FAIL = 'config/FETCH_FAIL'
export const FETCH_SUCCESS = 'config/FETCH_SUCCESS'

export { set, fetch }

function set(data) {
  return {
    type: SET,
    payload: data,
  }
}

function fetch(param) {
  return {
    type: FETCH,
    payload: param,
  }
}
