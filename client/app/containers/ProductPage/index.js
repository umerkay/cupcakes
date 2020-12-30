/**
 *
 * ProductPage
 *
 */

import React from "react";
import { connect } from "react-redux";
import commentsData from "./comments";

import actions from "../../actions";

import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { BagIcon } from "../../components/Icon";
import NotFound from "../../components/NotFound";
import LoadingIndicator from "../../components/LoadingIndicator";
import CommentsBlock from "simple-react-comments";
import { arrayBufferToBase64 } from "../../helpers/base64";

class ProductPage extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      comments: commentsData,
    };
  }
  componentDidMount() {
    const slug = this.props.match.params.slug;
    this.props.fetchProduct(slug);
    document.body.classList.add("product-page");
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.slug !== prevProps.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.fetchProduct(slug);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove("product-page");
  }

  render() {
    const {
      isLoading,
      product,
      productShopData,
      shopFormErrors,
      itemsInCart,
      productShopChange,
      handleAddToCart,
      handleRemoveFromCart,
    } = this.props;

    return (
      <div className="product-shop">
        {isLoading ? (
          <LoadingIndicator />
        ) : Object.keys(product).length > 0 ? (
          <Row className="flex-row">
            <Col xs="12" md="5" lg="5" className="mb-3 px-3 px-md-2">
              <div className="position-relative">
                <img
                  className="item-image"
                  src={`${
                    product.imageUrl
                      ? product.imageUrl
                      : "/images/placeholder-image.png"
                  }`}
                />
                {product.inventory <= 0 && !shopFormErrors["quantity"] ? (
                  <p className="stock out-of-stock">Out of stock</p>
                ) : (
                  <p className="stock in-stock">In stock</p>
                )}
              </div>
            </Col>
            <Col xs="12" md="7" lg="7" className="mb-3 px-3 px-md-2">
              <div className="product-container">
                <div className="item-box">
                  <div className="item-details">
                    <h1 className="item-name one-line-ellipsis">
                      {product.name}
                    </h1>
                    <p className="sku">{product.sku}</p>
                    <hr />
                    {product.brand && (
                      <p className="by">
                        see more from{" "}
                        <Link
                          to={`/shop/brand/${product.brand.slug}`}
                          className="default-link"
                        >
                          {product.brand.name}
                        </Link>
                      </p>
                    )}
                    <p className="item-desc">
                      Description: {product.description}
                    </p>
                    <p className="price">
                      ${product.price}
                      <p>+ Shipping ${product.price / 2}</p>
                    </p>
                  </div>
                  <div className="item-customize">
                    <Input
                      type={"number"}
                      error={shopFormErrors["quantity"]}
                      label={"Quantity"}
                      name={"quantity"}
                      decimals={false}
                      min={1}
                      max={product.inventory}
                      placeholder={"Product Quantity"}
                      disabled={
                        product.inventory <= 0 && !shopFormErrors["quantity"]
                      }
                      value={productShopData.quantity}
                      onInputChange={(name, value) => {
                        productShopChange(name, value);
                      }}
                    />
                  </div>
                  <div className="item-actions">
                    {itemsInCart.includes(product._id) ? (
                      <Button
                        variant="primary"
                        disabled={
                          product.inventory <= 0 && !shopFormErrors["quantity"]
                        }
                        text="Remove From Bag"
                        className="bag-btn"
                        icon={<BagIcon />}
                        onClick={() => handleRemoveFromCart(product)}
                      />
                    ) : (
                      <Button
                        variant="primary"
                        disabled={
                          product.quantity <= 0 && !shopFormErrors["quantity"]
                        }
                        text="Add To Bag"
                        className="bag-btn"
                        icon={<BagIcon />}
                        onClick={() => handleAddToCart(product)}
                      />
                    )}
                    <div style={{ marginTop: "1rem" }}></div>
                    <CommentsBlock
                      comments={this.state.comments}
                      signinUrl={"/signin"}
                      isLoggedIn
                      // reactRouter // set to true if you are using react-router
                      onSubmit={(text) => {
                        if (text.length > 0) {
                          this.setState({
                            comments: [
                              ...this.state.comments,
                              {
                                authorUrl: "#",
                                avatarUrl: "#avatarUrl",
                                createdAt: new Date(),
                                fullName: "Name",
                                text,
                              },
                            ],
                          });
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        ) : (
          <NotFound message="no product found." />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product.product,
    productShopData: state.product.productShopData,
    shopFormErrors: state.product.shopFormErrors,
    itemsInCart: state.cart.itemsInCart,
    isLoading: state.product.isLoading,
  };
};

export default connect(mapStateToProps, actions)(ProductPage);
