import React from 'react';

import Image from '@/app/components/parts/image/Image.parts';
import MonsterBallImage from '@/assets/images/monster-ball.webp';

import { createPokemonImageUrl } from '../../_libs/create-pokemon-image-url';
import styles from './PokeList.organism.module.scss';
import type { PokeListComponentProps } from './types';

const PokeList: React.FC<PokeListComponentProps> = ({ pokemons, onClickPokemon }) => {
  return (
    <div className={styles['pokemon-list']}>
      {pokemons && (
        <div className={styles['pokemon-list-items']}>
          {pokemons.map((pokemon) => {
            return (
              <div
                className={styles['pokemon-list-item-wrapper']}
                key={pokemon.id}
                onClick={() => onClickPokemon(pokemon.id)}
              >
                <Image src={createPokemonImageUrl(Number(pokemon.id))} alt={pokemon.name} />
                <span className={styles['pokemon-number']}>No.{pokemon.id}</span>
                <span className={styles['pokemon-name']}>{pokemon.name}</span>
                <img className={styles['monster-ball-image']} src={MonsterBallImage} alt="monster-ball" />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeList.whyDidYouRender = true;
export default PokeList;
