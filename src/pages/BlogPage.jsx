import React from "react";
import CoverSubPage from "../components/Cover/CoverSubPage";
import ArticleHeader from "../components/Blog/ArticleHeader";
import { useRouteData } from "react-static";

const BlogPage = () => {
  const { posts } = useRouteData();
  console.log(posts);
  return (
    <main>
      <CoverSubPage
        title="Blog"
        description={["Puedes realizarnos cualquier duda que tengas"]}
        image="/images/carousel/cartel-bienvenida.jpg"
      />

      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog_left_sidebar">
                {posts?.map((article, index) => {
                  return <ArticleHeader article={article} key={index} />;
                })}
                {/* <nav className="blog-pagination justify-content-center d-flex">
                  <ul className="pagination">
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Previous">
                        <i className="ti-angle-left"></i>
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a href="#" className="page-link">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a href="#" className="page-link" aria-label="Next">
                        <i className="ti-angle-right"></i>
                      </a>
                    </li>
                  </ul>
                </nav> */}
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                        />
                        <div className="input-group-append">
                          <button className="btns" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </aside>
                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title" style={{color: "#2d2d2d"}}>
                    Category
                  </h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Resaurant food</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Travel news</p>
                        <p>(10)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Modern technology</p>
                        <p>(03)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Product</p>
                        <p>(11)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Inspiration</p>
                        <p>21</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Health Care (21)</p>
                        <p>09</p>
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget popular_post_widget">
                  <h3 className="widget_title" style={{color: "#2d2d2d"}}>
                    Recent Post
                  </h3>
                  <div className="media post_item">
                    <img
                      src="/assets/img/post/xpost_1.png.pagespeed.ic.DHraJO02o0.webp"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog_details.html">
                        <h3 style={{color: "#2d2d2d"}}>
                          From life was you fish...
                        </h3>
                      </a>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="/assets/img/post/xpost_2.png.pagespeed.ic.7vUh6DKCND.webp"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog_details.html">
                        <h3 style={{color: "#2d2d2d"}}>The Amazing Hubble</h3>
                      </a>
                      <p>02 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="/assets/img/post/xpost_3.png.pagespeed.ic.hn99OMdlg6.webp"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog_details.html">
                        <h3 style={{color: "#2d2d2d"}}>Astronomy Or Astrology</h3>
                      </a>
                      <p>03 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="/assets/img/post/xpost_4.png.pagespeed.ic.QtzHWu9kKX.webp"
                      alt="post"
                    />
                    <div className="media-body">
                      <a href="blog_details.html">
                        <h3 style={{color: "#2d2d2d"}}>Asteroids telescope</h3>
                      </a>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </aside>
                <aside className="single_sidebar_widget tag_cloud_widget">
                  <h4 className="widget_title" style={{color: "#2d2d2d"}}>
                    Tag Clouds
                  </h4>
                  <ul className="list">
                    <li>
                      <a href="#">project</a>
                    </li>
                    <li>
                      <a href="#">love</a>
                    </li>
                    <li>
                      <a href="#">technology</a>
                    </li>
                    <li>
                      <a href="#">travel</a>
                    </li>
                    <li>
                      <a href="#">restaurant</a>
                    </li>
                    <li>
                      <a href="#">life style</a>
                    </li>
                    <li>
                      <a href="#">design</a>
                    </li>
                    <li>
                      <a href="#">illustration</a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget instagram_feeds">
                  <h4 className="widget_title" style={{color: "#2d2d2d"}}>
                    Instagram Feeds
                  </h4>
                  <ul className="instagram_row flex-wrap">
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/xpost_5.png.pagespeed.ic.cL8lK-c9YT.webp"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/xpost_6.png.pagespeed.ic.vbmteNE1r2.webp"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/xpost_7.png.pagespeed.ic.mqOeGH8JWi.webp"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/xpost_8.png.pagespeed.ic.Ygy58mgHf1.webp"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/post_9.png"
                          alt=""
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/assets/img/post/post_10.png"
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </aside>
                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title" style={{color: "#2d2d2d"}}>
                    Newsletter
                  </h4>
                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                        placeholder="Enter email"
                        required
                      />
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </aside>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogPage;
