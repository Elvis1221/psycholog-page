import { FC } from 'react';

import { Header } from './sections/Header';
import { Footer } from './sections/Footer/Footer.tsx';
import { Content } from './sections/Content';

import './App.css';

const App: FC = () => {
  // const psychologistRef = useRef<HTMLDivElement>(null);
  // const appointmentRef = useRef<HTMLDivElement>(null);
  // const servicesRef = useRef<HTMLDivElement>(null);
  //
  // const handleMenuItemClick = (ref: RefObject<HTMLDivElement>) => {
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
};

export default App;
