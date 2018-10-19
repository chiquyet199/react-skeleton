import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { DashBoard, About, NotFound } from './screens'

import './assets/css/common.scss'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={DashBoard} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App
