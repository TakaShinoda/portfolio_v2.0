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
              <h2 className="mb-5">Information</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル: 飲み会に県外から来る土地勘がない人向けに様々な情報をまとめておくシンプルなSPA+PWA</li>
                        <li>開発期間: 2日</li>
                        <li>開発人数: 1人</li>
                        <li>役割: 企画・プログラミング</li>
                        <li>概要: お店のサイト, お店へ現在地からのルート, 最寄りホテルのサイト, 最寄り駐車場へ現在地からのルート, シンプルな機能ですが調べるのは面倒なことをワンタップでできるようにしました。</li>
                        <li>開発言語: React.js</li>
                        <li>URL: <a href="https://1229ku.netlify.com/" rel="noopener noreferrer" target="_blank">https://1229ku.netlify.com/</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/kumamoto_PWA" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/kumamoto_PWA</a></li>
                        <li>関連記事: <a href="https://takashinoda.hatenablog.com/entry/2020/01/03/000503" rel="noopener noreferrer" target="_blank">ReactでSPA+PWAを作ってみた</a></li>
                      </ul>
                    </div>
                </div>
                <Link to="./#works">
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
        file(relativePath: {eq: "information.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`