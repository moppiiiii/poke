import React from 'react';

import type { HeadingTertiaryProps } from '../types';

const HeadingTertiary: React.FC<HeadingTertiaryProps> = ({ children }) => {
  return <h3>{children}</h3>;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HeadingTertiary.whyDidYouRender = true;
export default HeadingTertiary;
