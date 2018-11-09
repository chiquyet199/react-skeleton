import React from 'react'
import { Header, Footer } from 'utils/importer/components'

import './Layout.scss'

const Layout = props => {
  const { children } = props
  return (
    <div className="Layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
