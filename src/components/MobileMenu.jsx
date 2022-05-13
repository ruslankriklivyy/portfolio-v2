import React from 'react';

import { Menu } from './Menu';
import { Social } from './Social';
import { Button } from './Button';

import menuSvg from '../assets/menu.svg';
import closeSvg from '../assets/close.svg';

export const MobileMenu = ({ setVisibleMenu, visibleMenu, onClose }) => {
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
          <Button href="https://drive.google.com/file/d/1C3YWfsDzv0IG_m0Rokb7cTJ-gaijfRBD/view?usp=sharing">
            Resume
          </Button>
        </div>
      )}
    </>
  );
};
