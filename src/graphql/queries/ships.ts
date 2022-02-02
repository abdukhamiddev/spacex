import { gql } from '@apollo/client';

export const GET_SHIPS = gql`
query ships{
   ships{
       id
       image
       name
   }
}
`