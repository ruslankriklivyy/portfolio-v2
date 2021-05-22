import Button from './components/Button';
import githubSvg from './assets/github.svg';
import instagramSvg from './assets/instagram.svg';
import linkedinSvg from './assets/linkedin.svg';
import imJpg from './assets/im.jpg';
import linkSvg from './assets/link.svg';
import promoGif from './assets/promo.gif';
import menuSvg from './assets/menu.svg';
import closeSvg from './assets/close.svg';

import watchMoviesPng from './assets/watchmovies.png';
import clothingStorePng from './assets/react-clothing-store.png';
import reactFoodPng from './assets/react-food.png';
import reactGamesPng from './assets/react-games.png';
import nextMoviesPng from './assets/nextMovies.png';
import reactAnimePng from './assets/react-animlist.png';

import { Link } from 'react-scroll';
import React from 'react';

const menuitems = ['About', 'Skills', 'Works', 'Contact'];

function App() {
  const [visibleMenu, setVisibleMenu] = React.useState(false);

  const onClose = React.useCallback(() => {
    setVisibleMenu(false);
  }, []);

  const escapeListener = React.useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  React.useEffect(() => {
    document.addEventListener('keyup', escapeListener);
    return () => {
      document.removeEventListener('keyup', escapeListener);
    };
  }, [escapeListener]);

  return (
    <>
      <div className="social">
        <nav>
          <a href="https://github.com/ruslankrilkivyy">
            <img src={githubSvg} alt="githubSvg" />
          </a>
          <a href="https://www.instagram.com/_ruslan.kriklivyy/?hl=ru">
            <img src={instagramSvg} alt="instagramSvg" />
          </a>
          <a href="/">
            <img src={linkedinSvg} alt="linkedinSvg" />
          </a>
        </nav>
      </div>
      <div className="app">
        <header className="header">
          <div className="container container--header">
            <div className="header__inner">
              <div className="header__logo">
                <Link to={'promo'} smooth={true} duration={400} onClick={() => onClose()}>
                  R
                </Link>
              </div>
              <button className="burger-menu" onClick={() => setVisibleMenu(true)}>
                <img src={menuSvg} alt="menuSvg" />
              </button>
              {visibleMenu && (
                <div className="header__right header__right--menu">
                  <button className="close-menu" onClick={() => onClose()}>
                    <img src={closeSvg} alt="closeSvg" />
                  </button>
                  <nav className="nav">
                    <ul className="menu">
                      {menuitems.map((item, index) => (
                        <li className="menu__item" key={index}>
                          <Link
                            to={item.toLowerCase()}
                            smooth={true}
                            offset={-150}
                            duration={400}
                            onClick={() => onClose()}
                            className="menu__item-link">
                            <span>0{index + 1}.</span> {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <Button href="https://www.work.ua/ru/jobseeker/my/resumes/view/?id=6985575">
                    Resume
                  </Button>
                </div>
              )}
              <div className="header__right">
                <nav className="nav">
                  <ul className="menu">
                    {menuitems.map((item, index) => (
                      <li className="menu__item" key={index}>
                        <Link
                          to={item.toLowerCase()}
                          smooth={true}
                          offset={-150}
                          duration={400}
                          className="menu__item-link">
                          <span>0{index + 1}.</span> {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <Button href="https://www.work.ua/ru/jobseeker/my/resumes/view/?id=6985575">
                  Resume
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section className="promo" id="promo">
          <div className="container">
            <div className="promo__wrapper">
              <div className="promo__box">
                <h4 className="promo__suptitle">Hi, my name is</h4>
                <h1 className="promo__title">Ruslan Kriklivyy.</h1>
                <h4 className="promo__subtitle">I build things for the web.</h4>
                <p className="promo__text">
                  I like to create web interfaces with React and Vue. In the future, I want to
                  become a full stack developer. If you are interested in me, take a look at
                  examples of
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
                  I'm just a regular Internet guy. I want to develop as a developer, not only in
                  frontend, but also for example to try myself as a as a mobile app developer or try
                  to make native apps for PC. <br></br> <br></br> My interests: development, games,
                  movies, music. <br></br> <br></br> Experience: Worked as HTML/CSS coder at Sladko
                  Digital, also had a few freelance jobs. <br></br>
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

        <section className="skills" id="promo" skills>
          <div className="container">
            <div className="inner">
              <div className="title">
                <span>02.</span>
                <h2>My Skills</h2>
              </div>
            </div>
            <div className="skills__box">
              <div className="skills__item">
                <h2>Frontend</h2>
                <div className="skills__item-info">HTML / CSS</div>
                <div className="skills__item-info">SCSS / SASS</div>
                <div className="skills__item-info">JavaScript(ES5+) / TypeScript</div>
                <div className="skills__item-info">ReactJS / VueJS</div>
                <div className="skills__item-info">
                  Redux / React-Redux / Redux Thunk / Redux Saga
                </div>
                <div className="skills__item-info">Redux Toolkit</div>
                <div className="skills__item-info">MobX</div>
                <div className="skills__item-info">React-mobx-lite</div>
                <div className="skills__item-info">NextJS</div>
              </div>
              <div className="skills__item">
                <h2>Other Skills</h2>
                <div className="skills__item-info">Github</div>
                <div className="skills__item-info">axios</div>
                <div className="skills__item-info">FireBase</div>
                <div className="skills__item-info">WebSocket</div>
                <div className="skills__item-info">React Cookie</div>
                <div className="skills__item-info">npm / yarn</div>
                <div className="skills__item-info">JSON</div>
                <div className="skills__item-info">Gulp</div>
              </div>
            </div>
            <div className="skills__more">I will soon learn something new...</div>
          </div>
        </section>

        <section className="works" id="works">
          <div className="container">
            <div className="inner">
              <div className="title">
                <span>03.</span>
                <h2>My Works</h2>
              </div>
            </div>
            <div className="works__box">
              <a href="https://react-watch-movies.vercel.app/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={watchMoviesPng} alt="watchMoviesPng" />
                </div>
                <div className="works__info">
                  <h2>Watch Movies!</h2>
                  <div className="works__more-info">
                    <p>
                      You can search for movies, filter by genre and other types. You can also view
                      information about the movie, such as the trailer, or read the description.
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Redux Toolkit</div>
                    <div className="works__tech-item">TMDB API</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/react-watch-movies">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://react-watch-movies.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a
                href="https://react-clothing-store.vercel.app/"
                className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>Clothing Store</h2>
                  <div className="works__more-info">
                    <p>
                      I was inspired by the site of the famous blogger Itpedia, and decided to make
                      his clothing store site in React and TypeScript. Here you can browse products,
                      add to cart, change the size of clothes or the number of clothes added, and
                      much more.
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Styled Components</div>
                    <div className="works__tech-item">Formik</div>
                    <div className="works__tech-item">Redux / Redux Thunk</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/react-clothing-store">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://react-clothing-store.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={clothingStorePng} alt="clothingStorePng" />
                </div>
              </a>
              <a href="https://react-food.vercel.app/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={reactFoodPng} alt="reactFoodPng" />
                </div>
                <div className="works__info">
                  <h2>DeliveryFood</h2>
                  <div className="works__more-info">
                    <p>
                      This was my first experience using MobX, here you can add the food of your
                      choice to the basket, as well as change the quantity, etc.
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Mobx / react-mobx-lite</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/react-food">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://react-food.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a
                href="https://react-games-taupe.vercel.app/"
                className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>Games!</h2>
                  <div className="works__more-info">
                    <p>
                      This was my first experience using Redux Saga, in this project I relayed the
                      registration through Google and Githab. Here you can view information about
                      any game, add desired games and see what stores are available for the game
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Redux / Redux Saga</div>
                    <div className="works__tech-item">FireBase</div>
                    <div className="works__tech-item">RAWG API</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/react-games">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://react-games-taupe.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={reactGamesPng} alt="reactGamesPng" />
                </div>
              </a>
              <a href="https://next-movies-tau.vercel.app/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={nextMoviesPng} alt="nextMoviesPng" />
                </div>
                <div className="works__info">
                  <h2>Next Movies!</h2>
                  <div className="works__more-info">
                    <p>
                      In this project I implemented SSR on React, the same WatchMovies, only using a
                      cool technology called NextJS
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">NextJS</div>
                    <div className="works__tech-item">SCSS Modules</div>
                    <div className="works__tech-item">TMDB API</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/next-movies">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://next-movies-tau.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a
                href="https://react-anime-xi.vercel.app/"
                className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>AnimeList</h2>
                  <div className="works__more-info">
                    <p>
                      In this project you can view all information about anime, you can add anime to
                      several different types, such as add to watch later, etc.
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Redux Toolkit</div>
                    <div className="works__tech-item">React Cookie</div>
                    <div className="works__tech-item">Formik</div>
                    <div className="works__tech-item">Kitsu API</div>
                  </div>
                  <div className="works__links">
                    <a href="https://github.com/ruslankrilkivyy/react-anime">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="https://react-anime-xi.vercel.app/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={reactAnimePng} alt="reactAnimePng" />
                </div>
              </a>
              <div className="works__soon">I will do another project soon...</div>
            </div>
          </div>
        </section>

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
                  "Always write the code as if accompanied by a violent psychopath who <br></br>{' '}
                  knows where you live."
                </p>
                <span>Martin Golding</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer" id="contact">
          <div className="footer__info">
            <span>© 2021</span> <a href="/">Ruslan Kriklivyy</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
