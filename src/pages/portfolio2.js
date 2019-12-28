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
                        <li>タイトル: ポートフォリオサイト</li>
                        <li>開発期間: 5日</li>
                        <li>開発人数: 1人</li>
                        <li>役割: 企画・プログラミング</li>
                        <li>概要: ポートフォリオサイトv2です。</li>
                        <li>使用技術: GatsbyJS</li>
                        <li>URL: <a href="https://taka621.netlify.com/" rel="noopener noreferrer" target="_blank">https://taka621.netlify.com/</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/portfolio_v2.0" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/portfolio_v2.0</a></li>
                        <li>関連記事: <a href="https://takashinoda.hatenablog.com/entry/2019/12/23/000334" rel="noopener noreferrer" target="_blank">GatsbyJSで自分のホームページを作る</a></li>          
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