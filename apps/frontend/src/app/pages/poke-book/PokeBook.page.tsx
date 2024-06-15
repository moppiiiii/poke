import React from 'react';

import PokeBookTemplate from '../../components/templates/poke-book/PokeBook.template';
import type { PokeBookTemplateProps } from '../../components/templates/poke-book/type';
import { useGetPokemonDetailLazyQuery, useGetPokemonsQuery } from '../../graphql/generate/generated';

const PokeBookPage: React.FC = () => {
  /**
   * Get all Pokémon
   */
  const { data: allPokemonsData, loading: allPokemonsLoading } = useGetPokemonsQuery();

  /**
   * Obtain detailed data on Pokémon
   */
  const [getPokemonDetail, { data: pokemonDetailData }] = useGetPokemonDetailLazyQuery();

  /**
   * Function executed when a Pokémon is clicked from the Pokémon list
   * @param id number
   */
  const onClickPokemon = (id: number) => {
    getPokemonDetail({ variables: { id } });
    console.log(pokemonDetailData);
  };

  const pokeBookTemplateProps: PokeBookTemplateProps = {
    isLoading: allPokemonsLoading,
    pokemons: allPokemonsData?.pokemons,
    pokemonDetail: pokemonDetailData?.pokemonDetail,
    onClickPokemon,
  };

  return <PokeBookTemplate {...pokeBookTemplateProps} />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeBookPage.whyDidYouRender = true;
export default PokeBookPage;
