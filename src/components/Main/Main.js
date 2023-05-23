import React from "react";
import ProductList from "../ProductList/ProductList";
import "./Main.scss";
import ProductCard from "../ProductCart/ProductCard";

function Main() {
  return (
    <div className="main">
      <ProductList />
      <ProductCard />
    </div>
  );
}
export default Main;
