import React from "react";
import "./ProductList.scss";

function ProductList() {
  return (
    <div className="Product-List">
      <div className="icon-header">
        <img
          src="data:image/png;base64,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
       UVORK5CYII="
          alt=""
        ></img>
      </div>
      <div className="title-header">Our Products</div>
      <div className="list-product">
        <div className="product-item">
          <div className="item-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="title-product">Nike Air Zoom Pegasus 36</div>
          <div className="content-product">
            The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
            that targets breathability across high-heat areas. A slimmer heel
            collar and tongue reduce bulk, while exposed cables give you a snug
            fit at higher speeds.
          </div>
          <div className="item-bottom">
            <div className="item-price">$108.97</div>
            <div className="item-button">
              <div className="item-check">ADD TO CART</div>
            </div>
          </div>
        </div>
        <div className="product-item">
          <div className="item-image">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="title-product">Nike Air Zoom Pegasus 36</div>
          <div className="content-product">
            The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh
            that targets breathability across high-heat areas. A slimmer heel
            collar and tongue reduce bulk, while exposed cables give you a snug
            fit at higher speeds.
          </div>
          <div className="item-bottom">
            <div className="item-price">$108.97</div>
            <div className="item-button">
              <div className="item-check">ADD TO CART</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductList;
