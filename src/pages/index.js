import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
             {/*{config.school} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>*/}
          </div>
          <p className="lead mb-5">
          Hello! I am Takahiro Shinoda.<br />
          I am a master student at Department of Computer Science and System Engineering, University of Miyazaki. 

          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url} rel="noopener noreferrer" target="_blank">
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Master</h3>
              <div className="subheading mb-3">University of Miyazaki</div>
              <p>
              Master of Information System Engineering, Faculty of Engineering, University of Miyazaki.<br />
              Study interest is entertainment computing and computer graphics.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2018 - Present</span>
            </div>
          </div>

        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-vuejs"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-php"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-github"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Interest</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              SPA development using Vue.js or React.js
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Developing with Firebase
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              PWA
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Development of services that can solve issues by reducing user's trouble
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="works"
      >
        <div className="w-100">
          <h2 className="mb-5">Works</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./whiteboard">Whiteboard</Link>
              </h3>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./tours">Miyazaki Prefecture Tourist Review Website</Link>
              </h3>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./portfolio">Protfolio v1.0</Link>
              </h3>
            </div>
          </div>
          
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="contact"
      >
        <div className="w-100">
          <h2 className="mb-5">Contact</h2>
          <p>Mail or SNS</p>
          <ul className="fa-ul mb-0">
            <li>
              {/*<i className="fa-li fa fa-envelope text-warning"></i>*/}
              <a href ="mailto:qqgm3rk9k@gmail.com">qqgm3rk9k@gmail.com</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
