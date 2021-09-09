import React from 'react';
import { worksItems } from '../worksData';

import githubSvg from '../assets/github.svg';
import linkSvg from '../assets/link.svg';

const Works = () => {
  return (
    <section className="works" id="works">
      <div className="container">
        <div className="inner">
          <div className="title">
            <span>03.</span>
            <h2>My Works</h2>
          </div>
        </div>
        <div className="works__box">
          {worksItems.map(
            ({ id, name, poster, description, linkToGitHub, linkToLive, workTech, reverse }) => (
              <a
                key={id}
                href={linkToLive}
                className={reverse ? 'works__item' : 'works__item works__item--reverse'}>
                {!reverse ? (
                  <div className="works__img">
                    <div className="works__img-wrapper"></div>
                    <img src={poster} alt="work item poster" />
                  </div>
                ) : null}

                <div className="works__info">
                  <h2>{name}</h2>
                  <div className="works__more-info">
                    <p>{description}</p>
                  </div>
                  <div className="works__tech">
                    {workTech.map((name) => (
                      <div key={name} className="works__tech-item">
                        {name}
                      </div>
                    ))}
                  </div>
                  <div className="works__links">
                    <a href={linkToGitHub}>
                      <img src={githubSvg} alt="githubSvg" />
                    </a>
                    <a href={linkToLive}>
                      <img src={linkSvg} alt="linkSvg" />
                    </a>
                  </div>
                </div>
                {reverse ? (
                  <div className="works__img">
                    <div className="works__img-wrapper"></div>
                    <img src={poster} alt="work item poster" />
                  </div>
                ) : null}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
