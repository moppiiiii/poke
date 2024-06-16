import React from 'react';

import Header from '@/app/components/organisms/header/Header.organism';
import Loading from '@/app/components/organisms/loading/Loading.organism';

import PokeDetail from './_organisms/PokeDetail/PokeDetail.organism';
import PokeList from './_organisms/PokeList/PokeList.organism';
import styles from './PokeBook.template.module.scss';
import type { PokeBookTemplateProps } from './type';

const PokeBookTemplate: React.FC<PokeBookTemplateProps> = ({
  isLoading,
  pokeListComponentProps,
  pokeDetailComponentProps,
}) => {
  return (
    <div className={styles['pokemon-container']}>
      {isLoading && <Loading />}
      <Header />

      <div className={styles['pokemon-content-container']}>
        <div className={styles['pokemon-detail-wrapper']}>
          <PokeDetail {...pokeDetailComponentProps} />
        </div>

        <div className={styles['pokemon-list-wrapper']}>
          <PokeList {...pokeListComponentProps} />
        </div>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
PokeBookTemplate.whyDidYouRender = true;
export default PokeBookTemplate;
