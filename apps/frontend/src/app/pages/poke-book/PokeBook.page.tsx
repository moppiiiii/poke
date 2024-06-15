import React from 'react';

import PokeBookTemplate from '../../components/templates/poke-book/PokeBook.template';
import type { PokeBookTemplateProps } from '../../components/templates/poke-book/type';
import { useGetPokemonsQuery } from '../../graphql/generate/generated';

const PokeBookPage: React.FC = () => {
  const { data, loading, error } = useGetPokemonsQuery();

  const pokeBookTemplateProps: PokeBookTemplateProps = {
    isLoading: loading,
    pokemons: data?.pokemons,
  };

  return <PokeBookTemplate {...pokeBookTemplateProps} />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeBookPage.whyDidYouRender = true;
export default PokeBookPage;
