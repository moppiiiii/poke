// eslint-disable-next-line @typescript-eslint/no-unused-vars

import './wdyr';
import './styles/global.scss';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { DocumentTitleProvider } from './contexts/document-title/DocumentTitle.context';
import { LoadingProvider } from './contexts/loading/Loading.context';
import HomePage from './pages/home/Home.page';
import NotFoundPage from './pages/not-found/NotFound.page';

export function App() {
  return (
    <BrowserRouter>
      <DocumentTitleProvider>
        <LoadingProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="/*" element={<Navigate to="/404" />} />
          </Routes>
        </LoadingProvider>
      </DocumentTitleProvider>
    </BrowserRouter>
  );
}

export default App;
