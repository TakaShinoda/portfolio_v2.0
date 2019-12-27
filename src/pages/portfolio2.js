import React from 'react';
import Layout from '../components/Layout';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

  const IndexPage = () => (
  <StaticQuery
    query={query}
    render={ data => (
    <Layout>
      <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
          <div className="w-100">
              <h2 className="mb-5">Portfolio v2.0</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル</li>
                        <li>開発期間</li>
                        <li>開発人数</li>
                        <li>役割</li>
                        <li>概要</li>
                        <li>開発言語: GatsbyJS</li>
                        <li>URL: <a href="https://taka621.netlify.com/" rel="noopener noreferrer" target="_blank">https://taka621.netlify.com/</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/portfolio_v2.0" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/portfolio_v2.0</a></li>      
                      </ul>
                    </div>
                </div>
                <Link to="./">
                    <p>&lt;&lt; back</p>
                </Link>
            </div>
      </section>
    </div>
  </Layout>
  )}
/>
);

export default IndexPage;



const query = graphql`
    query {
        file(relativePath: {eq: "portfolio2.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`