import React from 'react';

import PokemonCard from '../../organisms/cards/pokemon-card/PokemonCard.organism';
import Header from '../../organisms/header/Header.organism';
import Loading from '../../organisms/loading/Loading.organism';
import styles from './Home.template.module.scss';
import type { HomeTemplateProps } from './type';

const HomeTemplate: React.FC<HomeTemplateProps> = ({ isLoading, pokemons }) => {
  return (
    <div className={styles['pokemon-container']}>
      {isLoading && <Loading />}

      <Header title="Poke Book" />
      {pokemons && (
        <div className={styles['content-wrapper']}>
          {pokemons.map((pokemon) => {
            return (
              <div key={pokemon.id}>
                <PokemonCard id={pokemon.id} name={pokemon.name} imageUrl={pokemon.sprites.front_default} />
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
