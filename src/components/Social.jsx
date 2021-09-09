import React from 'react';

import githubSvg from '../assets/github.svg';
import instagramSvg from '../assets/instagram.svg';
import telegramSvg from '../assets/telegram.svg';

const Social = () => {
  return (
    <div className="social">
      <nav>
        <a href="https://github.com/ruslankriklivyy">
          <img src={githubSvg} alt="githubSvg" />
        </a>
        <a href="https://www.instagram.com/_ruslan.kriklivyy/?hl=ru">
          <img src={instagramSvg} alt="instagramSvg" />
        </a>
        <a href="https://t.me/ruslankriklivy">
          <img src={telegramSvg} alt="linkedinSvg" />
        </a>
      </nav>
    </div>
  );
};

export default Social;
