import React from 'react';
import { Link } from 'react-router-dom';
import Product from '../components/Product';

const ProductsPage = (props) => {
  console.log(props.match);
  return (
    <>
      <h3>ProductsPage</h3>
      <Product id={props.match.params.id} />
      <Link to='/products'>Back to products list</Link>
    </>
  );
}

export default ProductsPage;