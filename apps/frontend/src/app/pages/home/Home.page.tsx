import React from 'react';

import HomeTemplate from '../../components/templates/home/Home.template';
import type { HomeTemplateProps } from '../../components/templates/home/type';
import { useGetPokemonsQuery } from '../../graphql/generate/generated';

const HomePage: React.FC = () => {
  const { data, loading, error } = useGetPokemonsQuery();

  const homeTemplateProps: HomeTemplateProps = {
    isLoading: loading,
    pokemons: data?.pokemons,
  };

  return <HomeTemplate {...homeTemplateProps} />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HomePage.whyDidYouRender = true;
export default HomePage;
