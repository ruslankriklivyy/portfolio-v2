import React from 'react';
import { Link } from 'react-scroll';
import { Button, Menu, MobileMenu } from '.';

const Header = ({ onClose, setVisibleMenu, visibleMenu }) => {
  const [scrolled, setScrolled] = React.useState(0);

  const proggresScroll = React.useCallback(() => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    setScrolled((winScroll / height) * 100);
  }, []);

  React.useEffect(() => {
    window.addEventListener('scroll', proggresScroll);

    return () => {
      window.removeEventListener('scroll', () => proggresScroll);
    };
  }, [proggresScroll]);

  return (
    <>
      <header className="header">
        <div className="container container--header">
          <div className="header__inner">
            <div className="header__logo">
              <Link to={'promo'} smooth={true} duration={400} onClick={() => onClose()}>
                R
              </Link>
            </div>
            <MobileMenu
              setVisibleMenu={setVisibleMenu}
              visibleMenu={visibleMenu}
              onClose={onClose}
            />
            <div className="header__right">
              <nav className="nav">
                <Menu />
              </nav>
              <Button href="https://www.work.ua/ru/resumes/6985575/">Resume</Button>
            </div>
          </div>
        </div>
      </header>
      <div class="progress-container">
        <div class="progress-bar" id="myBar" style={{ width: `${scrolled}%` }}></div>
      </div>
    </>
  );
};

export default Header;
