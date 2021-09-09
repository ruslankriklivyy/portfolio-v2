import React from 'react';
import { Link } from 'react-scroll';
import { Button, Menu, MobileMenu } from '.';

const Header = ({ onClose, setVisibleMenu, visibleMenu }) => {
  return (
    <header className="header">
      <div className="container container--header">
        <div className="header__inner">
          <div className="header__logo">
            <Link to={'promo'} smooth={true} duration={400} onClick={() => onClose()}>
              R
            </Link>
          </div>
          <MobileMenu setVisibleMenu={setVisibleMenu} visibleMenu={visibleMenu} onClose={onClose} />
          <div className="header__right">
            <nav className="nav">
              <Menu />
            </nav>
            <Button href="https://www.work.ua/ru/resumes/6985575/">Resume</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
