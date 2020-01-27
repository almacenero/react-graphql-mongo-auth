import React from "react";
import { Row, Col, Container } from "reactstrap";
import ItemsList from "./ItemsList";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const Items = () => {
  return (
    <Row>
      <Container>
        <ItemsList />
      </Container>
    </Row>
  );
};

export default Items;
