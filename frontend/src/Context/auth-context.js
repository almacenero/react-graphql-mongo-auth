import React from "react";
import Login from "../Components/Auth";
const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      userId: null,
      tokenExpiration: null
    };
  }

  componentDidMount = () => {
    let token = localStorage.getItem("mi token");
    console.log("fffffffff", token);
    if (token !== this.state.token) {
      this.setState({ token });
    }
  };

  handleToken = () => {
    let token = localStorage.getItem("mi token");
    console.log("fffffffff", token);
    if (token !== this.state.token) {
      this.setState({ token });
    }
  };

  handleUserID = value => {
    //   let ci_ruc_placeholder = this.state.ci_ruc_placeholder;
    //   if (ci_ruc_placeholder !== value) {
    //     ci_ruc_placeholder = value;
    //     this.setState({ ci_ruc_placeholder });
  };

  handleTokenExpiration = value => {
    //   let ci_ruc_placeholder = this.state.ci_ruc_placeholder;
    //   if (ci_ruc_placeholder !== value) {
    //     ci_ruc_placeholder = value;
    //     this.setState({ ci_ruc_placeholder });
  };
  clearAuth = () => {
    let token = null;
    let userId = null;
    let tokenExpiration = null;
    this.setState({ token });
    this.setState({ userId });
    this.setState({ tokenExpiration });
    localStorage.clear();
    console.log("hhhhhhhhh", this.state.token);
  };
  render() {
    return (
      <AuthContext.Provider
        value={{
          token: this.state.token,
          handleToken: this.handleToken,
          handleUserID: this.handleUserID,
          handleTokenExpiration: this.handleTokenExpiration,
          clearAuth: this.clearAuth
        }}
      >
        <div>{this.props.children}</div>
      </AuthContext.Provider>
    );
  }
}

export { AuthProvider, AuthContext };
