import React from 'react';

import Header from '../../organisms/header/Header.organism';

const HomeTemplate: React.FC = () => {
  return (
    <div>
      <Header title="Poke Book" />
      Home
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HomeTemplate.whyDidYouRender = true;
export default HomeTemplate;
