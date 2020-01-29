import React, { useState, useContext } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { AuthContext } from "./../../Context/auth-context";
import { useHistory } from "react-router-dom";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { message } from "antd";

const borde = css({
  borderStyle: "solid"
});

const formStyle = css({
  borderStyle: "solid",
  borderWidth: 1,
  padding: 10,
  borderRadius: 5
});

const LOGIN_USER = gql`
  mutation Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

const Login = () => {
  let history = useHistory();
  const { handleToken } = useContext(AuthContext);
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [login, { data, error }] = useMutation(LOGIN_USER);

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === "email") {
      setemailInput(value);
    }
    if (name === "password") {
      setpasswordInput(value);
    }
  };
  if (data) {
    localStorage.setItem("mi token", data.login.token);
    handleToken();
    history.push("/");
  }
  const errorMessage = () => {
    message.error("This is an error message");
  };

  return (
    <>
      {/* {error && errorMessage} */}
      <Row>
        <Container>Login</Container>
      </Row>
      <Row>
        <Container>
          <Col xs={3}>
            <Form
              css={formStyle}
              onSubmit={e => {
                e.preventDefault();
                //setemailData(emailInput);
                //setpasswordData(passwordInput);
                login({
                  variables: {
                    email: emailInput,
                    password: passwordInput
                  }
                });
                setemailInput("");
                setpasswordInput("");
              }}
            >
              <FormGroup>
                <Label for="email">Correo Electrónico:</Label>
                <Input
                  type="email"
                  name="email"
                  value={emailInput}
                  onChange={handleChange}
                  bsSize="sm"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Contraseña:</Label>
                <Input
                  type="password"
                  name="password"
                  value={passwordInput}
                  onChange={handleChange}
                  bsSize="sm"
                />
              </FormGroup>
              <Button type="submit">Ingresar</Button>
            </Form>
          </Col>
        </Container>
      </Row>
    </>
  );
};

export default Login;
