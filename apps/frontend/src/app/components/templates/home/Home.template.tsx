import React from 'react';

import Header from '../../organisms/header/Header.organism';
import Loading from '../../organisms/loading/Loading.organism';
import type { HomeTemplateProps } from './type';

const HomeTemplate: React.FC<HomeTemplateProps> = ({ isLoading, pokemons }) => {
  return (
    <div>
      {isLoading && <Loading />}

      <Header title="Poke Book" />
      {pokemons && (
        <div>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>No. {pokemon.id}</p>
                <p>{pokemon.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
