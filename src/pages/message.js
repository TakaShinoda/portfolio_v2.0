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
              <h2 className="mb-5">MessageApp</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル: 仲間に感謝のメッセージを送るアプリ</li>
                        <li>開発期間: 1ヶ月</li>
                        <li>開発人数: 1人</li>
                        <li>役割: プログラミング</li>
                        <li>概要: メッセージを送りたいユーザを選択してメッセージを送る。メッセージ内容(送信者、受信者、メッセージ内容、日時)はTLに投稿され、拍手(いいね)をもらう事でポイントが貯まる</li>
                        <li>使用技術: React Native</li>
                        {/*<li>URL</li>*/}
                        <li>GitHub: <a href="https://github.com/TakaShinoda/MessageApp" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/MessageApp</a></li>      
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
        file(relativePath: {eq: "MessageApp.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`