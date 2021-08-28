import React from "react";

const ArticleMiniature = ({ title, image, description }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div className="single-blogs mb-30">
        <div className="blog-img">
          <img className="image-blog" src={image} alt="" />
        </div>
        <div className="blogs-cap">
          <h5>
            <a href="https://preview.colorlib.com/theme/ecoho/index.html#">
              {title}
            </a>
          </h5>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleMiniature;
