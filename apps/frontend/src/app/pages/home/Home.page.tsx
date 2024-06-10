import React from 'react';

import HomeTemplate from '../../components/templates/home/Home.template';

const HomePage: React.FC = () => {
  return <HomeTemplate />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
HomePage.whyDidYouRender = true;
export default HomePage;
