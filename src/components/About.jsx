import React from 'react';
import imJpg from '../assets/ruslan.jpg';

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="inner">
          <div className="title">
            <span>01.</span>
            <h2>About Me</h2>
          </div>
        </div>
        <div className="about__box">
          <div className="about__left">
            <p className="text">
              I'm a Frontend developer, specializing in React and Vue. I also
              have some experience in mobile development with React Native and
              Flutter. <br></br> <br></br> Experience: currently working in a
              cool it company{' '}
              <a className="link" href="https://quartsoft.com/">
                QuartSoft
              </a>{' '}
              as a Frontend developer (React, Vue). Worked as HTML/CSS coder at
              Sladko Digital, also had a few freelance jobs. <br></br>
              <br></br> If you made it here, thanks for your interest!
            </p>
          </div>
          <div className="about__right">
            <div className="about__img-box">
              <div className="about__img-wrapper"></div>
              <img src={imJpg} alt="imJpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
