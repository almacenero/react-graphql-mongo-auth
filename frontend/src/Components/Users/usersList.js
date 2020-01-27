import React from "react";
import { Row, Col, Container, Table, Spinner } from "reactstrap";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

const borde = css({
  borderStyle: "solid"
});

const USERS_LIST = gql`
  {
    users {
      _id
      email
    }
  }
`;

const UsersList = () => {
  const { loading, error, data } = useQuery(USERS_LIST, { pollInterval: 500 });

  if (loading)
    return (
      <p css={{ padding: 200 }}>
        <Spinner color="primary" style={{ width: "3rem", height: "3rem" }} />
      </p>
    );
  if (error) return <p css={{ padding: 200 }}>Error :(</p>;
  return (
    <>
      <Row>Listado de Usuarios</Row>
      <Row>
        <Table>
          <thead>
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {data.users.map(({ _id, email }) => (
              <tr key={_id}>
                <td>{email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </>
  );
};

export default UsersList;
