import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ApolloClient from "apollo-boost";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Context/auth-context";
require("dotenv").config();
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_GRAPHQL,
  request: operation => {
    const token = localStorage.getItem("mi token");
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ""
      }
    });
  }
});

ReactDOM.render(
  <AuthProvider>
    <App client={client} />
  </AuthProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
