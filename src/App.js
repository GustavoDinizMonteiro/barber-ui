import React, { Component } from 'react'
import Table from './table'

const headers = [ 'Nome' ]
const elementKeys = [ 'name' ]

export default class App extends Component {
  state = { data: [] }

  async componentDidMount() {
    const { data } = await fetch('https://barber-diniz.herokuapp.com/api/clients')
      .then(res => res.json())
    this.setState({ data })
  }

  render() {
    const { data: elements } = this.state
    const props = { elements, headers, elementKeys }
    return <Table {...props} />
  }
}
