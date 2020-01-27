import React, { useState } from "react";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
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
  query Login($email: String, $password: String) {
    login(email: $email, password: $password) {
      userId
      token
      tokenExpiration
    }
  }
`;

const Login = () => {
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [emailData, setemailData] = useState("");
  const [passwordData, setpasswordData] = useState("");
  const { loading, error, data } = useQuery(LOGIN_USER, {
    variables: {
      email: emailData,
      password: passwordData
    }
  });

  const handleChange = e => {
    const { value, name } = e.target;
    if (name === "email") {
      setemailInput(value);
    }
    if (name === "password") {
      setpasswordInput(value);
    }
  };
  return (
    <>
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
                setemailData(emailInput);
                setpasswordData(passwordInput);
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
              <Button type="submit">Logear</Button>
            </Form>
          </Col>
        </Container>
      </Row>
    </>
  );
};

export default Login;
