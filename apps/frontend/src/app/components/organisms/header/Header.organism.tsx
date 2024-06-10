import React from 'react';

import HeadingPrimary from '../../parts/heading/heading-primary/HeadingPrimary.parts';
import styles from './Header.organism.module.scss';
import type { HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className={styles['header-container']}>
      <HeadingPrimary>{title}</HeadingPrimary>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Header.whyDidYouRender = true;
export default Header;
