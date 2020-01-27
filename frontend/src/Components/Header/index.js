import React from "react";
import { Row, Container } from "reactstrap";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const HeaderPage = () => {
  return (
    <Row>
      <Container>
        <Nav>
          <div css={{ margin: 5 }}>
            <Link to="/">Inicio</Link>
          </div>
          <div css={{ margin: 5 }}>
            <Link to="/items">Items</Link>
          </div>
          <div css={{ margin: 5 }}>
            <Link to="/users">Usuarios</Link>
          </div>
          <div css={{ margin: 5 }}>
            <Link to="/login">Login</Link>
          </div>
        </Nav>
      </Container>
    </Row>
  );
};

export default HeaderPage;
