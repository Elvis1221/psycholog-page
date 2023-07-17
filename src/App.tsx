import { FC } from 'react';

import { Header } from './sections/Header';
import { Footer } from './sections/Footer/Footer.tsx';
import { Content } from './sections/Content';

import './App.css';

const App: FC = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
