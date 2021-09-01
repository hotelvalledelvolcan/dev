import React from "react";
import { Link } from '@reach/router'

const ArticleMiniature = ({ title, image, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-blogs mb-30">
        <div className="blog-img">
          <img className="image-blog" src={image} alt={"Miniatura " + title} />
        </div>
        <div className="blogs-cap">
          <h5>
            <Link to={"blog/" + title.replace(/ /g, '')}>
              {title}
            </Link>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleMiniature;
