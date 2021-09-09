import React from 'react';

const Skills = () => {
  return (
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
            <div className="skills__item-info">Redux / Redux Thunk / Redux Saga / Vuex</div>
            <div className="skills__item-info">Redux Toolkit</div>
            <div className="skills__item-info">MobX</div>
            <div className="skills__item-info">Effector</div>
            <div className="skills__item-info">react-mobx-lite</div>
            <div className="skills__item-info">Formik / react-hook-form & Yup</div>
            <div className="skills__item-info">NextJS</div>
            <div className="skills__item-info">GatsbyJS</div>
          </div>
          <div className="skills__item">
            <h2>Other Skills</h2>
            <div className="skills__item-info">Git / Github</div>
            <div className="skills__item-info">GraphQL</div>
            <div className="skills__item-info">axios</div>
            <div className="skills__item-info">FireBase</div>
            <div className="skills__item-info">React Cookie</div>
            <div className="skills__item-info">npm / yarn</div>
            <div className="skills__item-info">JSON</div>
            <div className="skills__item-info">Gulp</div>
          </div>
        </div>
        <div className="skills__more">I will soon learn something new...</div>
      </div>
    </section>
  );
};

export default Skills;
