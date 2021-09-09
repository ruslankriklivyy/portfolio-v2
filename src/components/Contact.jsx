import React from 'react';
import { Link } from 'react-scroll';

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="inner inner--contact">
          <div className="title">
            <span>04.</span>
            <h2>Contacts</h2>
          </div>
        </div>
        <div className="contact__box">
          <div className="email">
            <h4>You can find me here:</h4>
            <a href="mailto:ruslankriklivyy@gmail.com">ruslankriklivyy@gmail.com</a>
          </div>
          <div className="contact__bottom">
            <div className="header__logo">
              <Link to={'promo'} duration={400}>
                R
              </Link>
            </div>
            <p>
              "Always write the code as if accompanied by a violent psychopath who <br></br> knows
              where you live."
            </p>
            <span>Martin Golding</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
