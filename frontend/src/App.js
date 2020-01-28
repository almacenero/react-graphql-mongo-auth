import React, { useContext, useEffect, useState } from "react";
import logo from "./logo.svg";
import { ApolloProvider } from "@apollo/react-hooks";
import "./App.css";
import HeaderPage from "./Components/Header/index";
import BodyPage from "./Components/Body/index";
import Items from "./Components/Items/index";
import Users from "./Components/Users/index";
import Login from "./Components/Auth/index";
import { AuthContext } from "./Context/auth-context";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App({ client }) {
  const { token, handleToken, clearAuth } = useContext(AuthContext);
  //idle time
  const [mytoken, setmytoken] = useState("");
  const [signoutTime, setSignoutTime] = useState(15000);
  const [warningTime, setWarningTime] = useState(20000);
  let warnTimeout;
  let logoutTimeout;

  const warn = () => {
    //alert("session cerrada");
    console.log("aaaaaaaa", localStorage.getItem("mi token"));

    if (localStorage.getItem("mi token")) {
      clearAuth();
    }
  };
  const logout = () => {
    if (localStorage.getItem("mi token")) {
      alert("En breve se cerrara tu session cerrar tu session");
    }
  };

  // const destroy = () => {
  //   alert("Session destroyed");
  // };
  const setTimeouts = () => {
    warnTimeout = setTimeout(warn, warningTime);
    logoutTimeout = setTimeout(logout, signoutTime);
  };

  const clearTimeouts = () => {
    if (warnTimeout) clearTimeout(warnTimeout);
    if (logoutTimeout) clearTimeout(logoutTimeout);
  };

  useEffect(() => {
    handleToken();
    const events = [
      "load",
      "mousemove",
      "mousedown",
      "click",
      "scroll",
      "keypress"
    ];

    const resetTimeout = () => {
      clearTimeouts();
      setTimeouts();
    };

    for (let i in events) {
      window.addEventListener(events[i], resetTimeout);
    }

    setTimeouts();
    return () => {
      for (let i in events) {
        window.removeEventListener(events[i], resetTimeout);
        clearTimeouts();
      }
    };
  }, []);

  // useEffect(() => {
  //   handleToken();
  // });

  return (
    <ApolloProvider client={client}>
      <Router>
        <HeaderPage />
        <Switch>
          {!token && <Redirect from="/" to="/login" exact />}
          {!token && <Redirect from="/items" to="/login" exact />}
          {!token && <Redirect from="/users" to="/login" exact />}
          {token && <Redirect from="/login" to="/" exact />}
          <Route path="/items">
            <Items />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/users">
            <Users />
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
