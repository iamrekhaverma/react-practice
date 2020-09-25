import React, { Component } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

export class OpenRoutes extends Component {

  render () {
    const {authed, path, component} = this.props
    return (
    <Route path={path} render={() => {
      return (
          authed
            ? <Redirect to='/' />
            : (() => component)()
      )
    }} />
    )
  }
}

export default withRouter(OpenRoutes);
