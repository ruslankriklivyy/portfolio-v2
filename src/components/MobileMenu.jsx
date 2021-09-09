import React from 'react';

import { Button, Menu, Social } from '.';
import menuSvg from '../assets/menu.svg';
import closeSvg from '../assets/close.svg';

const MobileMenu = ({ setVisibleMenu, visibleMenu, onClose }) => {
  return (
    <>
      <button className="burger-menu" onClick={() => setVisibleMenu(true)}>
        <img src={menuSvg} alt="menuSvg" />
      </button>
      {visibleMenu && (
        <div className="header__right header__right--menu">
          <button className="close-menu" onClick={() => onClose()}>
            <img src={closeSvg} alt="closeSvg" />
          </button>
          <nav className="nav">
            <Menu onClose={onClose} />
            <Social />
          </nav>
          <Button href="https://www.work.ua/ru/resumes/6985575/">Resume</Button>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
