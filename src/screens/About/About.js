import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'components'

const logo = require('../../assets/images/pj_sga_logo.png')

export default class About extends React.Component {
  render() {
    return (
      <Layout>
        This is About
        <Link to="/">Home</Link>
        <img src={logo} />
      </Layout>
    )
  }
}
