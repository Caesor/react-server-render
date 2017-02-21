import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.params.repoName}</h2>
      </div>
    )
  }
}
