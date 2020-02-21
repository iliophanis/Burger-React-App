import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Layout>
            <Route exact path="/" component={BurgerBuilder} />
            <Route exact path="/checkout" component={Checkout} />
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
