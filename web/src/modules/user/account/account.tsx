import React from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import { Redirect } from "react-router-dom";
import { MeQuery } from "../../../schemaTypes";
import SubscribeUser from "./SubscribeUser";

const meQuery = gql`
  query MeQuery {
    me {
      id
      email
      type
    }
  }
`;
export class Account extends React.PureComponent {
  render() {
    return (
      <Query<MeQuery> fetchPolicy="network-only" query={meQuery}>
        {({ data, loading }) => {
          if (loading) {
            return null;
          }

          if (!data) {
            return <div>data is undefined</div>;
          }

          if (!data.me) {
            return <Redirect to="/login">Please login</Redirect>;
          }

          if (data.me.type === "free-trial") {
            return <SubscribeUser />;
          }

          return <div>thanks for buying our product</div>;
        }}
      </Query>
    );
  }
}
