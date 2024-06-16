import { gql } from '@apollo/client';

export const POKEMON_DETAIL = gql`
  query GetPokemonDetail($id: Int!) {
    pokemonDetail(id: $id) {
      id
      name
      height
      weight
      sprites {
        front_default
        back_default
      }
      cries {
        latest
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
