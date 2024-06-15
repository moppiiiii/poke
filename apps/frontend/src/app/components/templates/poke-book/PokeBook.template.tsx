import React from 'react';

import Header from '@/app/components/organisms/header/Header.organism';
import Loading from '@/app/components/organisms/loading/Loading.organism';
import Image from '@/app/components/parts/image/Image.parts';
import MonsterBallImage from '@/assets/images/monster-ball.webp';

import { POKEMON_IMAGE_BASE_PATH } from './PokeBook.template.constants';
import styles from './PokeBook.template.module.scss';
import type { PokeBookTemplateProps } from './type';

const PokeBookTemplate: React.FC<PokeBookTemplateProps> = ({ isLoading, pokemons }) => {
  return (
    <div className={styles['pokemon-container']}>
      {isLoading && <Loading />}
      <Header />

      <div className={styles['pokemon-content-container']}>
        <div className={styles['pokemon-detail-wrapper']}>aaa</div>

        <div className={styles['pokemon-list-wrapper']}>
          {pokemons && (
            <div className={styles['pokemon-list']}>
              {pokemons.map((pokemon) => {
                return (
                  <div className={styles['pokemon-list-item-wrapper']} key={pokemon.id}>
                    <Image src={`${POKEMON_IMAGE_BASE_PATH}/${pokemon.id}.png`} alt={pokemon.name} />
                    <span className={styles['pokemon-number']}>No.{pokemon.id}</span>
                    <span className={styles['pokemon-name']}>{pokemon.name}</span>
                    <img className={styles['monster-ball-image']} src={MonsterBallImage} alt="monster-ball" />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeBookTemplate.whyDidYouRender = true;
export default PokeBookTemplate;
