import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components'

export default class NotFound extends React.Component {
  render() {
    return (
      <Layout>
        This is NotFound
        <Link to="/">Home</Link>
      </Layout>
    )
  }
}
