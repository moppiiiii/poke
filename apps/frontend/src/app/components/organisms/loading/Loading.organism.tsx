import React from 'react';

import LoadingStyle from './Loading.organism.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={LoadingStyle['loading-container']}>
      <div className={LoadingStyle['content-wrapper']}>
        <p className={LoadingStyle['loading-emoji']}>🤔</p>
        <p className={LoadingStyle['loading-word']}>Loading...</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Loading.whyDidYouRender = true;
export default Loading;
