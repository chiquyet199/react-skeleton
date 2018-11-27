import React from 'react'
import { Header } from 'utils/importer/components'
import { Consumer } from '../context'

export default class HeaderContainer extends React.Component {
  render = () => <Consumer>{state => <Header />}</Consumer>
}
