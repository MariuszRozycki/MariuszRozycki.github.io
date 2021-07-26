import React from 'react';
import '../styles/ProductListPage.css';
import { Link } from 'react-router-dom';

const products = ["car", "bike", "motorcycle"]

const ProductListPage = () => {

  const productsList = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product.charAt().toUpperCase() + product.slice(1)}</Link>
    </li>
  ))

  return (
    <div className="products">
      <h3>Products List</h3>
      <ul>{productsList}</ul>
    </div>
  );
}

export default ProductListPage;