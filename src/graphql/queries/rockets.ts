import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
query rockets{
    rockets{
        id 
        active
        boosters
        company
        cost_per_launch
        country
        description
        diameter{
          feet
          meters
        }
    }
}
`