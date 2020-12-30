/**
 *
 * BrandsPage
 *
 */

import React from "react";
import { connect } from "react-redux";
import Filters from "../../components/Filters";

import actions from "../../actions";

import BrandList from "../../components/BrandList";

class BrandsPage extends React.PureComponent {
  componentDidMount() {
    this.props.fetchBrands();
  }

  render() {
    const { brands } = this.props;

    return (
      <div className="brands-page" style={{ display: "flex", gap: "1rem" }}>
        <Filters></Filters>
        <BrandList brands={[...brands, ...brands, ...brands]} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brand.brands,
  };
};

export default connect(mapStateToProps, actions)(BrandsPage);
