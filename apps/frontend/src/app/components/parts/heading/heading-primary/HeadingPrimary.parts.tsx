import React from 'react';

import type { HeadingPrimaryProps } from '../types';
import HeadingPrimaryStyle from './HeadingPrimary.parts.module.scss';

const HeadingPrimary: React.FC<HeadingPrimaryProps> = ({ children }) => {
  return <h1 className={HeadingPrimaryStyle['heading-primary']}>{children}</h1>;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HeadingPrimary.whyDidYouRender = true;
export default HeadingPrimary;
