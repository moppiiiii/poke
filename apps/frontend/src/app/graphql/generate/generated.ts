import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends Record<string, unknown>, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Ability = {
  __typename?: 'Ability';
  ability: NamedApiResource;
  is_hidden: Scalars['Boolean']['output'];
  slot: Scalars['Int']['output'];
};

export type Cries = {
  __typename?: 'Cries';
  latest: Scalars['String']['output'];
  legacy: Scalars['String']['output'];
};

export type Form = {
  __typename?: 'Form';
  form: NamedApiResource;
};

export type GameIndex = {
  __typename?: 'GameIndex';
  game_index: Scalars['Int']['output'];
  version: NamedApiResource;
};

export type HeldItem = {
  __typename?: 'HeldItem';
  item: NamedApiResource;
  version_details: VersionDetail[];
};

export type Move = {
  __typename?: 'Move';
  move: NamedApiResource;
  version_group_details: VersionGroupDetail[];
};

export type NamedApiResource = {
  __typename?: 'NamedAPIResource';
  name: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export type OtherSprites = {
  __typename?: 'OtherSprites';
  dream_world: Sprite;
  home: Sprite;
  official_artwork: Sprite;
  showdown: Sprite;
};

export type PastType = {
  __typename?: 'PastType';
  generation: NamedApiResource;
  types: Type[];
};

export type Pokemon = {
  __typename?: 'Pokemon';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type PokemonDetail = {
  __typename?: 'PokemonDetail';
  abilities: Ability[];
  base_experience: Scalars['Int']['output'];
  cries: Cries;
  forms: Form[];
  game_indices: GameIndex[];
  height: Scalars['Int']['output'];
  held_items: HeldItem[];
  id: Scalars['Int']['output'];
  is_default: Scalars['Boolean']['output'];
  location_area_encounters: Scalars['String']['output'];
  moves: Move[];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  past_types: PastType[];
  species: PokemonSpecies;
  sprites: Sprites;
  stats: Stat[];
  types: Type[];
  weight: Scalars['Int']['output'];
};

export type PokemonSpecies = {
  __typename?: 'PokemonSpecies';
  species: NamedApiResource;
};

export type Query = {
  __typename?: 'Query';
  pokemonDetail: PokemonDetail;
  pokemons: Pokemon[];
  users: User[];
};

export type QueryPokemonDetailArgs = {
  id: Scalars['Int']['input'];
};

export type Sprite = {
  __typename?: 'Sprite';
  back_default?: Maybe<Scalars['String']['output']>;
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default: Scalars['String']['output'];
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
};

export type Sprites = {
  __typename?: 'Sprites';
  back_default: Scalars['String']['output'];
  back_female?: Maybe<Scalars['String']['output']>;
  back_shiny?: Maybe<Scalars['String']['output']>;
  back_shiny_female?: Maybe<Scalars['String']['output']>;
  front_default: Scalars['String']['output'];
  front_female?: Maybe<Scalars['String']['output']>;
  front_shiny?: Maybe<Scalars['String']['output']>;
  front_shiny_female?: Maybe<Scalars['String']['output']>;
  other?: Maybe<OtherSprites>;
  versions?: Maybe<VersionSprites>;
};

export type Stat = {
  __typename?: 'Stat';
  base_stat: Scalars['Int']['output'];
  effort: Scalars['Int']['output'];
  stat: NamedApiResource;
};

export type Type = {
  __typename?: 'Type';
  slot: Scalars['Int']['output'];
  type: NamedApiResource;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type VersionDetail = {
  __typename?: 'VersionDetail';
  rarity: Scalars['Int']['output'];
  version: NamedApiResource;
};

export type VersionGroupDetail = {
  __typename?: 'VersionGroupDetail';
  level_learned_at: Scalars['Int']['output'];
  move_learn_method: NamedApiResource;
  version_group: NamedApiResource;
};

export type VersionSprites = {
  __typename?: 'VersionSprites';
  black_white: Sprite;
  crystal: Sprite;
  diamond_pearl: Sprite;
  emerald: Sprite;
  firered_leafgreen: Sprite;
  gold: Sprite;
  heartgold_soulsilver: Sprite;
  icons: Sprite;
  omegaruby_alphasapphire: Sprite;
  platinum: Sprite;
  red_blue: Sprite;
  ruby_sapphire: Sprite;
  silver: Sprite;
  ultra_sun_ultra_moon: Sprite;
  x_y: Sprite;
  yellow: Sprite;
};

export type GetPokemonDetailQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;

export type GetPokemonDetailQuery = {
  __typename?: 'Query';
  pokemonDetail: {
    __typename?: 'PokemonDetail';
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: {
      __typename?: 'Sprites';
      other?: {
        __typename?: 'OtherSprites';
        showdown: { __typename?: 'Sprite'; back_default?: string | null; front_default: string };
      } | null;
    };
    cries: { __typename?: 'Cries'; latest: string };
    types: { __typename?: 'Type'; type: { __typename?: 'NamedAPIResource'; name: string } }[];
  };
};

export type GetPokemonsQueryVariables = Exact<Record<string, never>>;

export type GetPokemonsQuery = {
  __typename?: 'Query';
  pokemons: { __typename?: 'Pokemon'; id: number; name: string }[];
};

export type GetUsersQueryVariables = Exact<Record<string, never>>;

export type GetUsersQuery = {
  __typename?: 'Query';
  users: { __typename?: 'User'; id: string; email: string; name: string }[];
};

export const GetPokemonDetailDocument = gql`
  query GetPokemonDetail($id: Int!) {
    pokemonDetail(id: $id) {
      id
      name
      height
      weight
      sprites {
        other {
          showdown {
            back_default
            front_default
          }
        }
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

/**
 * __useGetPokemonDetailQuery__
 *
 * To run a query within a React component, call `useGetPokemonDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonDetailQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPokemonDetailQuery(
  baseOptions: Apollo.QueryHookOptions<GetPokemonDetailQuery, GetPokemonDetailQueryVariables> &
    ({ variables: GetPokemonDetailQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>(GetPokemonDetailDocument, options);
}
export function useGetPokemonDetailLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>(GetPokemonDetailDocument, options);
}
export function useGetPokemonDetailSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>(
    GetPokemonDetailDocument,
    options
  );
}
export type GetPokemonDetailQueryHookResult = ReturnType<typeof useGetPokemonDetailQuery>;
export type GetPokemonDetailLazyQueryHookResult = ReturnType<typeof useGetPokemonDetailLazyQuery>;
export type GetPokemonDetailSuspenseQueryHookResult = ReturnType<typeof useGetPokemonDetailSuspenseQuery>;
export type GetPokemonDetailQueryResult = Apollo.QueryResult<GetPokemonDetailQuery, GetPokemonDetailQueryVariables>;
export const GetPokemonsDocument = gql`
  query GetPokemons {
    pokemons {
      id
      name
    }
  }
`;

/**
 * __useGetPokemonsQuery__
 *
 * To run a query within a React component, call `useGetPokemonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPokemonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPokemonsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPokemonsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
}
export function useGetPokemonsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
}
export function useGetPokemonsSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetPokemonsQuery, GetPokemonsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetPokemonsQuery, GetPokemonsQueryVariables>(GetPokemonsDocument, options);
}
export type GetPokemonsQueryHookResult = ReturnType<typeof useGetPokemonsQuery>;
export type GetPokemonsLazyQueryHookResult = ReturnType<typeof useGetPokemonsLazyQuery>;
export type GetPokemonsSuspenseQueryHookResult = ReturnType<typeof useGetPokemonsSuspenseQuery>;
export type GetPokemonsQueryResult = Apollo.QueryResult<GetPokemonsQuery, GetPokemonsQueryVariables>;
export const GetUsersDocument = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export function useGetUsersSuspenseQuery(
  baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
}
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
