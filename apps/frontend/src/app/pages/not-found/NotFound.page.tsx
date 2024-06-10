import React from 'react';

import NotFoundTemplate from '../../components/templates/not-found/NotFound.template';
import { useDocumentTitle } from '../../contexts/document-title/DocumentTitle.context';

const NotFoundPage: React.FC = () => {
  useDocumentTitle('Poke Book | 404');

  return <NotFoundTemplate />;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
NotFoundPage.whyDidYouRender = true;
export default NotFoundPage;
