import React from "react";
import { Route } from "react-router-dom";

class PrivateRoutes extends Route {
  render() {
    const {
      component,
      ...rest
    } = this.props;

    const ComponentWithRouter = component;
    return <ComponentWithRouter {...rest} />;
  }
}

export default PrivateRoutes;
