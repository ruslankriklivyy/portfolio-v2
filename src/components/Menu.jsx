import React from 'react';
import { Link } from 'react-scroll';

export const Menu = ({ onClose }) => {
  const menuitems = ['About', 'Skills', 'Works', 'Contact'];

  return (
    <ul className="menu">
      {menuitems.map((item, index) => (
        <li className="menu__item" key={index}>
          <Link
            to={item.toLowerCase()}
            smooth={true}
            offset={-150}
            duration={400}
            onClick={() => onClose && onClose()}
            className="menu__item-link">
            <span>0{index + 1}.</span> {item}
          </Link>
        </li>
      ))}
    </ul>
  );
};
