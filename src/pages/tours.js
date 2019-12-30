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
              <h2 className="mb-5">MIYAZAKI PREFECTURE TOURIST REVIEW WEBSITE</h2>
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                  <div className="resume-content">
                      <div>
                          <Img fixed={data.file.childImageSharp.fixed} />
                        </div>
                      <ul>
                        <li>タイトル: 宮崎県の観光地口コミサイト</li>
                        <li>開発期間: 3週間</li>
                        <li>開発人数: 1人</li>
                        <li>役割: 企画・プログラミング</li>
                        <li>概要: 宮崎県の観光地の口コミを投稿するwebサイト。口コミの質を上げるためにクローズド(ログイン必須)にしました。</li>
                        <li>使用技術: Vue.js, Firebase</li>
                        <li>URL: <a href="https://miyazaki-tours.firebaseapp.com/" rel="noopener noreferrer" target="_blank">https://miyazaki-tours.firebaseapp.com</a></li>
                        <li>GitHub: <a href="https://github.com/TakaShinoda/miyazaki-tours" rel="noopener noreferrer" target="_blank">https://github.com/TakaShinoda/miyazaki-tours</a></li>  
                        <li>関連記事: <a href="https://takashinoda.hatenablog.com/entry/2019/07/21/101754" rel="noopener noreferrer" target="_blank">Vue.js + Firebaseで観光地の口コミサイトを作る -1-</a></li>      
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
        file(relativePath: {eq: "tours.png"}) {
            childImageSharp{
                fixed(width: 450) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`