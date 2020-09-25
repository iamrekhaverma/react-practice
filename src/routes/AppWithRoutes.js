import React from "react";
import { Route, Switch } from "react-router-dom";
import NoMatch from "components/NoMatch";
import { Signup } from 'pages/user/Signup';
import { Signin } from 'pages/user/Signin';
import Home from 'pages/home';
import ProductsListing from "pages/products/product-listing";
import { DefaultLayout } from "layout";
import ProductDetail from "components/ProductDetail/ProductDetail";

const AppWithRoutes = () => {
  return (
    <DefaultLayout>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route key='products' path='/products' component={ProductsListing} exact />
        <Route key='productDetail' path='/products/:id' component={ProductDetail} exact/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/signin" exact component={Signin}/>
        <Route component={NoMatch} />
      </Switch>
    </DefaultLayout>
  );
};

export default AppWithRoutes;
