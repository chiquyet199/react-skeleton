import axios from 'axios'

axios.defaults.headers = null

const BASE_URL = '....'

const options = {
  baseURL: BASE_URL,
  timeout: 6000000,
  headers: null,
}

function post(url, data) {
  const postOptions = {
    baseURL: BASE_URL,
    timeout: 6000000,
    url,
    method: 'POST',
    data,
  }
  return axios(postOptions).then(logApiCall)
}

function get(url, params) {
  const getOptions = { ...options, url, params, method: 'GET' }
  return axios(getOptions).then(logApiCall)
}

function logApiCall(response) {
  console.log(response)
  return new Promise(resolve => {
    resolve(response)
  })
}

export default { get, post }
