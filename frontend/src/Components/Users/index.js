import React from "react";
import { Row, Col, Container } from "reactstrap";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import UsersList from "./usersList";

const borde = css({
  borderStyle: "solid"
});

const Users = () => {
  return (
    <Row>
      <Container>
        <UsersList />
      </Container>
    </Row>
  );
};

export default Users;
