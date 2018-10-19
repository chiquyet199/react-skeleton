import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { DashBoard } from './screens'
import { Loading } from './components'
import loadable from 'react-loadable'
import './assets/css/common.scss'

const AsyncAbout = loadable({
  loader: () => import('./screens/About/About'),
  loading: Loading,
})

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/about" component={AsyncAbout} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App
