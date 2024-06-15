import React from 'react';

import PokemonLogoImage from '@/assets/images/pokemon-logo.webp';

import styles from './Header.organism.module.scss';

const Header: React.FC = () => {
  return (
    <div className={styles['header-container']}>
      <img className={styles['logo-image']} src={PokemonLogoImage} alt="pokemon-logo" />
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Header.whyDidYouRender = true;
export default Header;
