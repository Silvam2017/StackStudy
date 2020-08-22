import gql from 'graphql-tag';


export const QUERY_USER = gql`
query users{
    users {
      username
      email
    }
  } 
`;


export const QUERY_SUBJECT = gql`
  query subject{
    subjects{
      name
    }
  }
  `;

  export const QUERY_CARD = gql`
  query subject{
    subjects {
      name
      cards {
        _id
        frontText
        backText
      }
    }
  }
  `;