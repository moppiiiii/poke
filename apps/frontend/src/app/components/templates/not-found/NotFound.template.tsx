import React from 'react';

import HeadingSecondary from '../../parts/heading/heading-secondary/HeadingSecondary.parts';
import NotFoundStyle from './NotFound.template.module.scss';

const NotFoundTemplate: React.FC = () => {
  return (
    <div className={NotFoundStyle['not-found-container']}>
      <div className={NotFoundStyle['content-wrapper']}>
        <div className={NotFoundStyle['not-found-title']}>
          <HeadingSecondary>404</HeadingSecondary>
          <p className={NotFoundStyle['not-found-sigh']}>😮‍💨</p>
        </div>
        <p className={NotFoundStyle['not-found-description']}>お探しのページは見つかりませんでした</p>
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
NotFoundTemplate.whyDidYouRender = true;
export default NotFoundTemplate;
