import React from "react";
import logo from "./logo.svg";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import HeaderPage from "./Components/Header/index";
import BodyPage from "./Components/Body/index";
import Items from "./Components/Items/index";
import Users from "./Components/Users/index";
import Login from "./Components/Auth/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App({ client }) {
  return (
    <ApolloProvider client={client}>
      <Router>
        <HeaderPage />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/">
            <BodyPage />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
