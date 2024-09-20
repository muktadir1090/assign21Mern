import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $tech2: String!) {
  login(email: $email, password: $password) {
      
     token
      user {_id}
    }
  }
`;

export const CREATE_user = gql`
mutation login($email: String!, $password2: String!) {
  login(email: $email, password: $password, username: $username) {
      
     token
      user {_id}
    }
  }
`;
