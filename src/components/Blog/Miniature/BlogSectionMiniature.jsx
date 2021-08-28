import React from "react";
import ArticleMiniature from "./ArticleMiniature";
import { useRouteData } from 'react-static'
const BlogSectionMiniature = () => {
  const  {posts}  = useRouteData()

  return (
    <section className="home-blog section-padding40 fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-tittle text-center mb-60">
              <h2>Nuestro Blog</h2>
            </div>
          </div>
        </div>
        <div className="row">

          {
            posts.map((post, index) => {
              return <ArticleMiniature key={index}
              title={post.title}
              image={post.image}
              description={post.description}
            />
            })
          }
        </div>
      </div>
    </section>
  );
};

export default BlogSectionMiniature;
