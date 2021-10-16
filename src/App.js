import React from 'react';

import { Social } from './components/Social';
import { Header } from './components/Header';
import { Promo } from './components/Promo';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Works } from './components/Works';
import { Contact } from './components/Contact';

function App() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const onClose = React.useCallback(() => {
    setVisibleMenu(false);
  }, []);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener]);

  return (
    <>
      <Social />
      <div className="app">
        <Header onClose={onClose} visibleMenu={visibleMenu} setVisibleMenu={setVisibleMenu} />
        <Promo />
        <About />
        <Skills />
        <Works />
        <Contact />
        <footer className="footer" id="contact">
          <div className="footer__info">
            <span>© 2021</span> <a href="/">Ruslan Kriklivyy</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
