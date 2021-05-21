import Button from './components/Button';
import githubSvg from './assets/github.svg';
import instagramSvg from './assets/instagram.svg';
import linkedinSvg from './assets/linkedin.svg';
import imJpg from './assets/im.jpg';
import linkSvg from './assets/link.svg';

import watchMoviesPng from './assets/watchmovies.png';
import clothingStorePng from './assets/react-clothing-store.png';
import reactFoodPng from './assets/react-food.png';
import reactGamesPng from './assets/react-games.png';
import nextMoviesPng from './assets/nextMovies.png';
import reactAnimePng from './assets/react-animlist.png';

import { Link } from 'react-scroll';

const menuitems = ['About', 'Skills', 'Works', 'Contact'];

function App() {
  return (
    <>
      <div className="social">
        <nav>
          <a href="/">
            <img src={githubSvg} alt="githubSvg" />
          </a>
          <a href="/">
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
                <Link to={'promo'} duration={400}>
                  R
                </Link>
              </div>
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
                <Button>Resume</Button>
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
                  I'm a Boston-based software engineer who specializes in building (and occasionally
                  designing) exceptional digital experiences. Currently, I'm an engineer at
                  Upstatement focused on building accessible, human-centered products.
                </p>
                <Button>Get In Touch</Button>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto esse doloremque
                  accusamus dignissimos cumque, ratione unde amet nesciunt dicta tenetur, minus quis
                  eos, voluptates corrupti. Dolor sed distinctio culpa explicabo. Laboriosam
                  cupiditate voluptas rem debitis, quis quae pariatur hic cum, iure blanditiis
                  molestias magni deleniti vel veniam officiis laudantium in dignissimos harum? Nam
                  magnam esse suscipit hic autem voluptas animi!
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
              <a href="/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={watchMoviesPng} alt="watchMoviesPng" />
                </div>
                <div className="works__info">
                  <h2>Watch Movies!</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Redux Toolkit</div>
                    <div className="works__tech-item">TMDB API</div>
                  </div>
                  <div className="works__links">
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a href="/" className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>Clothing Store</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
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
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={clothingStorePng} alt="clothingStorePng" />
                </div>
              </a>
              <a href="/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={reactFoodPng} alt="reactFoodPng" />
                </div>
                <div className="works__info">
                  <h2>DeliveryFood</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
                    </p>
                  </div>
                  <div className="works__tech">
                    <div className="works__tech-item">ReactJS</div>
                    <div className="works__tech-item">TypeScript</div>
                    <div className="works__tech-item">Mobx / react-mobx-lite</div>
                  </div>
                  <div className="works__links">
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a href="/" className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>Games!</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
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
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={reactGamesPng} alt="reactGamesPng" />
                </div>
              </a>
              <a href="/" className="works__item">
                <div className="works__img">
                  <div className="works__img-wrapper"></div>
                  <img src={nextMoviesPng} alt="nextMoviesPng" />
                </div>
                <div className="works__info">
                  <h2>Next Movies!</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
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
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
              </a>
              <a href="/" className="works__item works__item--reverse">
                <div className="works__info">
                  <h2>AnimeList</h2>
                  <div className="works__more-info">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, ipsa?
                      Consequatur, asperiores praesentium exercitationem quod adipisci voluptate
                      reprehenderit blanditiis
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
                    <a href="/">
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href="/">
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
