import React from 'react';

const Button = ({ children }) => {
  return (
    <a href="/" className="btn">
      {children}
    </a>
  );
};

export default Button;
