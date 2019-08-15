import React, { Component } from 'react'
import { array, arrayOf, string } from 'prop-types'
import Row from './TableRow'

export default class Table extends Component {
  static propTypes = {
    elements: array.isRequired,
    headers: arrayOf(string).isRequired,
    elementKeys: array.isRequired
  }
  
  render() {
    const { headers, elements, elementKeys } = this.props
    return (
      <table>
        <thead>
          <tr>{
            headers.map(head => (
              <th key={head}>
                <p style={{ display: 'inline' }}>{head}</p>
              </th>
            ))
          }</tr>
        </thead>
        <tbody>{
          elements.map(element => <Row {...{ element, elementKeys }} />)
        }</tbody>
      </table>
    )
  }
}
  