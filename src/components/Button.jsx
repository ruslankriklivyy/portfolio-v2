import React from 'react';

export const Button = ({ children, href }) => {
  return (
    <a href={href} className="btn">
      {children}
    </a>
  );
};
