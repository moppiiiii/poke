import React from 'react';

import PikachuRunningGif from '@/assets/images/pikachu-running.gif';

import Image from '../../parts/image/Image.parts';
import LoadingStyle from './Loading.organism.module.scss';

const Loading: React.FC = () => {
  return (
    <div className={LoadingStyle['loading-container']}>
      <div className={LoadingStyle['content-wrapper']}>
        <Image src={PikachuRunningGif} alt="pikachu-running" />
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
Loading.whyDidYouRender = true;
export default Loading;
