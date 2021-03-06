import React from 'react';

export const Skills = () => {
  return (
    <section className="skills" id="promo">
      <div className="container">
        <div className="inner">
          <div className="title title--skills">
            <span>02.</span>
            <h2>My Skills</h2>
          </div>
        </div>
        <div className="skills__box">
          <div className="skills__item">
            <h2>Frontend</h2>
            <div className="skills__item-info">JavaScript(ES5+)/TypeScript</div>
            <div className="skills__item-info">ReactJS/VueJS</div>
            <div className="skills__item-info">Redux/Redux Thunk/Redux Saga/Vuex</div>
            <div className="skills__item-info">Redux Toolkit</div>
            <div className="skills__item-info">MobX</div>
            <div className="skills__item-info">Effector</div>
            <div className="skills__item-info">Formik/react-hook-form & Yup</div>
            <div className="skills__item-info">NextJS</div>
            <div className="skills__item-info">GatsbyJS</div>
          </div>
          <div className="skills__item">
            <h2>Backend</h2>
            <div className="skills__item-info">Express.js</div>
            <div className="skills__item-info">NestJS</div>
            <div className="skills__item-info">MongoDB & mongoose</div>
            <div className="skills__item-info">multer</div>
            <div className="skills__item-info">JWT</div>
          </div>
          <div className="skills__item">
            <h2>Other Skills</h2>
            <div className="skills__item-info">Git/Github</div>
            <div className="skills__item-info">GraphQL</div>
            <div className="skills__item-info">axios</div>
            <div className="skills__item-info">FireBase</div>
            <div className="skills__item-info">React Cookie</div>
            <div className="skills__item-info">npm/yarn</div>
            <div className="skills__item-info">JSON</div>
            <div className="skills__item-info">Gulp</div>
          </div>
        </div>
      </div>
    </section>
  );
};
