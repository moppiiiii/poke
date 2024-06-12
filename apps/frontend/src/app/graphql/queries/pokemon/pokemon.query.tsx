import { gql } from '@apollo/client';

export const POKEMON = gql`
  query GetPokemons {
    pokemons {
      id
      name
      sprites {
        front_default
      }
    }
  }
`;
