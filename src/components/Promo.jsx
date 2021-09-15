import React from 'react';
import { Link } from 'react-scroll';
import { Button } from '.';

const Promo = () => {
  return (
    <section className="promo" id="promo">
      <div className="promo-blockout"></div>
      <div className="container">
        <div className="promo__wrapper">
          <div className="promo__box">
            <h4 className="promo__suptitle">Hi, my name is</h4>
            <h1 className="promo__title">Ruslan Kriklivyy.</h1>
            <h4 className="promo__subtitle">I build things for the web.</h4>
            <p className="promo__text">
              I like to create web interfaces with ReactJS and VueJS. If you are interested in me,
              take a look at examples of
              <Link to={'works'} smooth={true} offset={-150} duration={400}>
                <a href="/">my work.</a>
              </Link>
              <br></br> <br></br> If you have job offers then link to my email below, or you can
              write to me in other social networks (they are on the left).
            </p>
            <Button href="mailto:ruslankriklivyy@gmail.com">Get In Touch</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
