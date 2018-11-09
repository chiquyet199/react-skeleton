import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'utils/importer/components'
import { selectors, store } from 'utils/importer'

export default class DashBoard extends React.Component {
  render() {
    console.log(store)
    return (
      <Layout>
        This is DashBoard
        <Link to="/about">About</Link>
      </Layout>
    )
  }
}
