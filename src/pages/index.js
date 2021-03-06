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
          <h2 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h2>
          <div className="subheading mb-5">
             {/*{config.school} · {config.phone} ·
            <a href={`mailto:${config.email}`}>{config.email}</a>*/}
          </div>
          <p className="lead mb-5">
          こんにちは．Shinoda Talahiroです．<br />
          宮崎大学修士2年です． <br />
          <br />
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
              Study interest is entertainment computing and computer graphics.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2018 - March 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Bachelor</h3>
              <div className="subheading mb-3">University of Miyazaki</div>
              <p>
              Faculty of Engineering Department of Information Systems Engineering.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">April 2014 - March 2018</span>
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


          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              HTML5, CSS3
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              JavaScript (React.js, Vue.js)
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              PHP
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Babel
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Webpack
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              GraphQL
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Firebase
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              GitHub
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
                <Link to="./information">InformationApp</Link>
              </h3>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./portfolio2">Portfolio v2.0</Link>
              </h3>
            </div>
          </div>

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

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./tinderui">UI like matching app</Link>
              </h3>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./message">messageApp</Link>
              </h3>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">
                <Link to="./influence">Influence_Twitter</Link>
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
              <a href ="mailto:qqgm3rk9k@gmail.com">メールはこちらから</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
