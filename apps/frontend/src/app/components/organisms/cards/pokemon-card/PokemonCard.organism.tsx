import React from 'react';

import type { PokemonCardProps } from '../types';
import styles from './PokemonCard.organism.module.scss';

const PokemonCard: React.FC<PokemonCardProps> = ({ id, name, imageUrl }) => {
  return (
    <div className={styles['pokemon-card-wrapper']}>
      <img className={styles['pokemon-image']} src={imageUrl} alt={name} />
      <div className={styles['pokemon-description']}>
        <p className={styles['pokemon-id']}>No: {id}</p>
        <p className={styles['pokemon-name']}>{name}</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokemonCard.whyDidYouRender = true;
export default PokemonCard;
