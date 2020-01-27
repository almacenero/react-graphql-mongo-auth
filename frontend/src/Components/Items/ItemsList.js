import React from "react";
import { Row, Col, Container, Table, Spinner } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const ITEMS_LIST = gql`
  {
    items {
      _id
      title
      price_cost
    }
  }
`;

const ItemsList = () => {
  const { loading, error, data } = useQuery(ITEMS_LIST, { pollInterval: 500 });

  if (loading)
    return (
      <p css={{ padding: 200 }}>
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
      </p>
    );
  if (error) return <p css={{ padding: 200 }}>Error :(</p>;
  return (
    <>
      <Row>Listado de Items</Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {data.items.map(({ _id, title, price_cost }) => (
              <tr key={_id}>
                <td>{title}</td>
                <td>{price_cost}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default ItemsList;
