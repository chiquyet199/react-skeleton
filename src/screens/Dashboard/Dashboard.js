import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'

export default class DashBoard extends React.Component {
  render() {
    return (
      <Layout>
        This is DashBoard
        <Link to="/about">About</Link>
      </Layout>
    )
  }
}
