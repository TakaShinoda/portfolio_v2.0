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
              <h2 className="mb-5">Whiteboard</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル: 研究室内の連絡事項を管理するwebアプリ</li>
                        <li>開発期間: 2週間</li>
                        <li>開発人数: 1人</li>
                        <li>役割: 企画・開発</li>
                        <li>概要: 研究室のメンバーが連絡事項を投稿・削除できるwebアプリ</li>
                        <li>使用技術: React.js, Redux, Next.js, Firebase</li>
                        <li>URL: <a href="https://labapp-75272.firebaseapp.com/" rel="noopener noreferrer" target="_blank">https://labapp-75272.firebaseapp.com/</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/Whiteboard" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/Whiteboard</a></li>
                        <li>関連記事: <a href="https://takashinoda.hatenablog.com/entry/2019/12/06/001927" rel="noopener noreferrer" target="_blank">研究室のお知らせ管理をホワイトボードからWebに移行したいので作ってみた</a></li>      
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
        file(relativePath: {eq: "whiteboard.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`