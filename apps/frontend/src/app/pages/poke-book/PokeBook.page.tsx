import React from 'react';
import { map } from 'remeda';

import type { PokeDetailComponentProps } from '@/app/components/templates/poke-book/_organisms/PokeDetail/types';
import type { PokeListComponentProps } from '@/app/components/templates/poke-book/_organisms/PokeList/types';

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
  const [getPokemonDetail, { data: pokemonDetailData, loading: pokemonDetailLoading }] = useGetPokemonDetailLazyQuery();

  /**
   * Function executed when a Pokémon is clicked from the Pokémon list
   * @param id number
   */
  const onClickPokemon = (id: number) => {
    getPokemonDetail({ variables: { id } });
  };

  const pokeListComponentProps: PokeListComponentProps = {
    pokemons: allPokemonsData?.pokemons,
    onClickPokemon,
  };

  const pokeDetailComponentProps: PokeDetailComponentProps = {
    pokemonDetail: pokemonDetailData && {
      id: pokemonDetailData.pokemonDetail.id,
      name: pokemonDetailData.pokemonDetail.name,
      height: pokemonDetailData.pokemonDetail.height,
      weight: pokemonDetailData.pokemonDetail.weight,
      types: map(pokemonDetailData.pokemonDetail.types, (v) => v.type.name),
      criesSource: pokemonDetailData.pokemonDetail.cries.latest,
      frontImage: pokemonDetailData.pokemonDetail.sprites.front_default,
      backImage: pokemonDetailData.pokemonDetail.sprites.back_default,
    },
  };

  const pokeBookTemplateProps: PokeBookTemplateProps = {
    isLoading: allPokemonsLoading || pokemonDetailLoading,
    pokeListComponentProps,
    pokeDetailComponentProps,
  };

  return <PokeBookTemplate {...pokeBookTemplateProps} />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeBookPage.whyDidYouRender = true;
export default PokeBookPage;
