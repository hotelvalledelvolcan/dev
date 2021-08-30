import React from "react";

const ArticleHeader = ({ article }) => {

  const creationDate = new Date(article.creationDate)
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={article.image} alt="" />
        <a href="#" className="blog_item_date">
          <h3>{creationDate.getDay()}</h3>
          <p>{creationDate.toLocaleString('es-ES', { month: 'short' })}</p>
        </a>
      </div>
      <div className="blog_details">
        <a className="d-inline-block" href="blog_details.html">
          <h2 className="blog-head" style={{ color: "#2d2d2d" }}>
            {article.title}
          </h2>
        </a>
        <p>{article.description}</p>
        <ul className="blog-info-link">
          <li>
            <a href="#">
              <i className="fa fa-user"></i> {article.tags.map(tag => tag.name).join(', ')}
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-comments"></i> 03 Comments
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
};

export default ArticleHeader;
