import React from 'react';
import { Social, Header, Promo, About, Skills, Works, Contact } from './components';

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
