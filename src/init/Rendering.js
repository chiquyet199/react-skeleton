import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

import 'assets/css/common.scss'

export async function init() {
  ReactDOM.render(<App />, document.getElementById('root'))
}
