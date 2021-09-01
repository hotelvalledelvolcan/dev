import React from "react";
import { Link } from '@reach/router'
import clasess from "./ArticleHeader.module.css"

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
        <Link className="d-inline-block" to={"blog/" + article.title.replace(/ /g, '')}>
          <h2 className={"blog-head " + clasess.color}>
            {article.title}
          </h2>
        </Link>
        <p>{article.description}</p>
        <ul className="blog-info-link">
          <li>
            <a href="#">
              <i className="fa fa-user"></i> {article.tags.map(tag => tag.name).join(', ')}
            </a>
          </li>
          {/* <li>
            <a href="#">
              <i className="fa fa-comments"></i> 03 Comments
            </a>
          </li> */}
        </ul>
      </div>
    </article>
  );
};

export default ArticleHeader;