import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        This is About
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}
