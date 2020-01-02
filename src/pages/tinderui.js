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
              <h2 className="mb-5">UI LIKE MATCHING APP</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル: マッチングアプリ風のUI</li>
                        <li>開発期間: 2週間</li>
                        <li>開発人数: 1人</li>
                        <li>役割: プログラミング</li>
                        <li>概要: マッチングアプリ風のUIをreact-swipeable-cardsを使って作りました。カード下部をタップすると詳細を表示できます。</li>
                        <li>使用技術: React</li>
                        <li>URL:  <a href="https://react-matching-card.netlify.com/" rel="noopener noreferrer" target="_blank">https://react-matching-card.netlify.com/</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/CardUI" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/CardUI</a></li>      
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
        file(relativePath: {eq: "TinderUI.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`