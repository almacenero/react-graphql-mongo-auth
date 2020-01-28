import React, { useContext } from "react";
import { Row, Container } from "reactstrap";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "./../../Context/auth-context";
import { useHistory } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const HeaderPage = () => {
  let history = useHistory();
  const { clearAuth, token } = useContext(AuthContext);
  return (
    <Row>
      <Container>
        <Nav>
          {token && (
            <>
              <div css={{ margin: 5 }}>
                <Link to="/">Inicio</Link>
              </div>
              <div css={{ margin: 5 }}>
                <Link to="/items">Items</Link>
              </div>
              <div css={{ margin: 5 }}>
                <Link to="/users">Usuarios</Link>
              </div>
            </>
          )}
          {token && (
            <div css={{ margin: 5 }}>
              <Button
                onClick={() => {
                  clearAuth();
                  history.push("/");
                }}
              >
                Logout
              </Button>
            </div>
          )}
        </Nav>
      </Container>
    </Row>
  );
};

export default HeaderPage;
