import { Link } from 'react-scroll';
import React from 'react';
import { Social, Header, Promo, About, Skills, Works } from './components';

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
        <section className="contact">
          <div className="container">
            <div className="inner inner--contact">
              <div className="title">
                <span>04.</span>
                <h2>Contacts</h2>
              </div>
            </div>
            <div className="contact__box">
              <div className="email">
                <h4>You can find me here:</h4>
                <a href="mailto:ruslankriklivyy@gmail.com">ruslankriklivyy@gmail.com</a>
              </div>
              <div className="contact__bottom">
                <div className="header__logo">
                  <Link to={'promo'} duration={400}>
                    R
                  </Link>
                </div>
                <p>
                  "Always write the code as if accompanied by a violent psychopath who <br></br>{' '}
                  knows where you live."
                </p>
                <span>Martin Golding</span>
              </div>
            </div>
          </div>
        </section>

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
