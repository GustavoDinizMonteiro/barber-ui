import React, { Component } from 'react'
import { arrayOf, shape, string, number } from 'prop-types'

export default class TableRow extends Component {
  static propTypes = {
    element: shape({
      name: string.isRequired,
      attendances: arrayOf(shape({
        from: number.isRequired,
        to: number
      })).isRequired
    }).isRequired,
    elementKeys: arrayOf(string).isRequired
  }
  
  render() {
    const { element, elementKeys } = this.props
    return (
      <tr>{
        elementKeys.map(key => (
          <td key={key}>{element[key]}</td>
        ))
      }</tr>
    )
  }
}
  