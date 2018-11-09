import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import { DashBoard } from 'utils/importer/screens'
import { AsyncAbout } from 'utils/importer/lazy-components'

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
