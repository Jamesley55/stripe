import React from "react";
import { Mutation } from "react-apollo";
import { gql } from "apollo-boost";
import { LoginMutationVariables, LoginMutation } from "../../schemaTypes";
import { RouteComponentProps } from "react-router-dom";

const loginMutation = gql`
  mutation loginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      email
    }
  }
`;
export class loginView extends React.PureComponent<RouteComponentProps<{}>> {
  state = {
    email: "",
    password: ""
  };
  handleChange = (e: any) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  render() {
    const { password, email } = this.state;
    return (
      <Mutation<LoginMutation, LoginMutationVariables> mutation={loginMutation}>
        {mutate => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <div>
              <input
                type="text"
                name="email"
                placeholder="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button
                onClick={async () => {
                  const response = await mutate({
                    variables: this.state
                  });
                  console.log(response);
                  this.props.history.push("/account");
                }}
              >
                login
              </button>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}
