import React from "react";
import { Row, Container } from "reactstrap";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const HeaderPage = () => {
  return (
    <Row css={borde}>
      <Container>Encabezadoooooooooooooo</Container>
    </Row>
  );
};

export default HeaderPage;
