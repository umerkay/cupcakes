/**
 *
 * Homepage
 *
 */

import React from "react";
import { connect } from "react-redux";

import { Row, Col, Button } from "reactstrap";
import "./index.scss";
// import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import actions from "../../actions";
import banners from "./banners.json";
import reviews from "./reviews.json";
import bestSellers from "./bestSellers.json";
import CarouselSlider from "../../components/CarouselSlider";
import { responsiveOneItemCarousel } from "../../components/CarouselSlider/helpers";

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className="homepage">
        <div className="home-carousel" style={{ height: "100vh" }}>
          <CarouselSlider
            swipeable={true}
            showDots={true}
            infinite={true}
            autoPlay={false}
            slides={banners}
            responsive={responsiveOneItemCarousel}
          >
            {banners.map((item, index) => (
              <>
                <div class="home-banner" style={{ background: item.imageUrl }}>
                  <div>
                    <h1 className="title">{item.title}</h1>
                    <p class="desc">{item.desc}</p>
                    <Link to="/brands">
                      <Button className="primary">View Brands</Button>
                    </Link>
                  </div>
                </div>
              </>
            ))}
          </CarouselSlider>
        </div>
        <div className="boxed">
          <div id="hot-deal">
            <div class="img">
              <img
                src="https://sc01.alicdn.com/kf/HTB1BC.safvsK1Rjy0Fiq6zwtXXa9/228359859/HTB1BC.safvsK1Rjy0Fiq6zwtXXa9.jpg_.webp"
                alt=""
                width="100%"
              />
            </div>
            <div class="info">
              <div class="subtitle">Hot Deal Today</div>
              <div class="desc">Traditional Crockery</div>
              <div class="price">$16.00</div>
              <Button className="primary">Order Now</Button>
            </div>
          </div>
          <div id="best-seller">
            <div class="subtitle">Sweet Cupcakes</div>
            <div class="desc">BEST SELLERS</div>
            <Row className="flex-sm-row">
              {bestSellers.map((brand, index) => (
                <Col xs="6" md="4" lg="3" key={index} className="mb-3 px-2">
                  <div className="brand-box">
                    <Link
                      to={`/product/nike-air-max-270-react-se`}
                      className="d-block"
                    >
                      {/* <Link to={`/shop/brand/${brand.id}`} className="d-block"> */}
                      <img src={brand.imageUrl} alt="" />
                      <h4>{brand.title}</h4>
                      <p className="brand-desc">{brand.desc}</p>
                      <p className="brand-desc">{brand.price}</p>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
        <div id="testimonials">
          <CarouselSlider
            swipeable={true}
            showDots={true}
            infinite={true}
            autoPlay={false}
            slides={banners}
            responsive={responsiveOneItemCarousel}
          >
            {reviews.map((item, index) => (
              <>
                <div class="home-banner">
                  <div>
                    <img src={item.imageUrl} width="150px" alt="" />
                    <h1 className="title">{item.title}</h1>
                    <p class="desc">{item.desc}</p>
                    <Button className="primary">Try Our Cupcakes</Button>
                  </div>
                </div>
              </>
            ))}
          </CarouselSlider>
        </div>
        <div class="boxed">
          <div id="offers">
            <div class="subtitle">Making People Happy</div>
            <div class="desc mb-3">OFFER THIS WEEK</div>
            <Row className="flex-row">
              <Col xs="12" lg="4" className="order-lg-1 mb-3 px-3 px-md-2">
                <div className="d-flex flex-column h-100 justify-content-between">
                  <img src="/images/banners/banner-2.jpg" className="mb-3" />
                  <img src="/images/banners/banner-6.jpg" />
                </div>
              </Col>
              <Col xs="12" lg="4" className="order-lg-3 mb-3 px-3 px-md-2">
                <div className="d-flex flex-column h-100 justify-content-between">
                  <img src="/images/banners/banner-6.jpg" className="mb-3" />
                  <img src="/images/banners/banner-2.jpg" />
                </div>
              </Col>
              <Col xs="12" lg="4" className="order-lg-3 mb-3 px-3 px-md-2">
                <div className="d-flex flex-column h-100 justify-content-between">
                  <img src="/images/banners/banner-2.jpg" className="mb-3" />
                  <img src="/images/banners/banner-6.jpg" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="mt-5">
            <div>
              <Row>
                <Col>
                  <div class="desc">NEW CAKE</div>
                </Col>
                <Col>
                  <div class="desc">HOT CAKE</div>
                </Col>
              </Row>

              <Row>
                <Col className="flex-sm-column">
                  {bestSellers.map((brand, index) => (
                    <Col key={index} className="mb-3 px-2">
                      <div className="brand-box">
                        {/* <Link to={`/shop/brand/${brand.id}`} className=""> */}
                        <Link
                          to={`/product/nike-air-max-270-react-se`}
                          className=""
                        >
                          <div
                            className="flex-sm-row"
                            style={{ display: "flex" }}
                          >
                            <img src={brand.imageUrl} width="200px" alt="" />
                            <div>
                              <h4>{brand.title}</h4>
                              <p className="brand-desc">{brand.desc}</p>
                              <p className="brand-desc">{brand.price}</p>
                              <Button className="primary">
                                Try Our Cupcakes
                              </Button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Col>

                <Col className="flex-sm-column">
                  {bestSellers.map((brand, index) => (
                    <Col key={index} className="mb-3 px-2">
                      <div className="brand-box">
                        <Link to={`/shop/brand/${brand.id}`} className="">
                          <div
                            className="flex-sm-row"
                            style={{ display: "flex" }}
                          >
                            <img src={brand.imageUrl} width="200px" alt="" />
                            <div>
                              <h4>{brand.title}</h4>
                              <p className="brand-desc">{brand.desc}</p>
                              <p className="brand-desc">{brand.price}</p>
                              <Button className="primary">
                                Try Our Cupcakes
                              </Button>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </Col>
                  ))}
                </Col>
              </Row>
            </div>
          </div>
          {/* <div id="blog">
          <div class="subtitle">Sub Title</div>
          <div class="desc">LATEST BLOG</div>
          <Row>
            <Col>
              <Row>
                <img src="/images/blog-1.png" alt="" />
              </Row>
            </Col>
            <Col>
              <Row>
                <img src="/images/blog-2.png" alt="" />
              </Row>
              <Row>
                <img src="/images/blog-2.png" alt="" />
              </Row>
            </Col>
          </Row>
        </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
