import React from 'react';

import Image from '@/app/components/parts/image/Image.parts';

import { calcPokemonBodySize } from '../../_libs/calc-pokemon-body-size';
import { createPokemonTypeImagePath } from '../../_libs/create-pokemon-type-image-path';
import styles from './PokeDetail.organism.module.scss';
import type { PokeDetailComponentProps } from './types';

const PokeDetail: React.FC<PokeDetailComponentProps> = ({ pokemonDetail }) => {
  return (
    <>
      {pokemonDetail ? (
        <div className={styles['pokemon-detail']}>
          <div className={styles['pokemon-detail-words-wrapper']}>
            <p className={styles['pokemon-detail-description']}>No.{pokemonDetail.id}</p>
            <p className={styles['pokemon-detail-description']}>{pokemonDetail.name}</p>
          </div>

          {/* TODO: Change to object mapping instead of functions */}
          <div className={styles['pokemon-types-wrapper']}>
            {pokemonDetail.types.map((type) => (
              <div key={type}>
                {/* eslint-disable-next-line @typescript-eslint/no-unsafe-argument */}
                <Image src={createPokemonTypeImagePath(type)} alt={type} />
              </div>
            ))}
          </div>

          <div className={styles['pokemon-images-wrapper']}>
            <Image src={pokemonDetail.frontImage} alt={`${pokemonDetail.name}_front`} />
            <Image src={pokemonDetail.backImage} alt={`${pokemonDetail.name}_back`} />
          </div>

          <div className={styles['pokemon-detail-body-size-wrapper']}>
            <p className={styles['pokemon-detail-body-size-description']}>
              Height: {calcPokemonBodySize(Number(pokemonDetail.height))} m
            </p>
            <p className={styles['pokemon-detail-body-size-description']}>
              Weight: {calcPokemonBodySize(Number(pokemonDetail.weight))} kg
            </p>
          </div>
        </div>
      ) : (
        <div className={styles['pokemon-unselected']}>
          <p className={styles['select-pokemon-message']}>Please select a Pokémon</p>
        </div>
      )}
    </>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeDetail.whyDidYouRender = true;
export default PokeDetail;
