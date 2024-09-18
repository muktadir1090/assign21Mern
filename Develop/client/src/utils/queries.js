import { gql } from '@apollo/client';

export const QUERY_me = gql`
  query me {
    me {
      _id 
      username
      email
    }
  }
`;


