import React from 'react';

import type { LinkButtonProps } from '../types';
import LinkButtonStyle from './LinkButton.parts.module.scss';

const LinkButton: React.FC<LinkButtonProps> = ({ children, href }) => {
  return (
    <a href={href}>
      <button className={LinkButtonStyle['link-button']}>{children}</button>
    </a>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
LinkButton.whyDidYouRender = true;
export default LinkButton;
