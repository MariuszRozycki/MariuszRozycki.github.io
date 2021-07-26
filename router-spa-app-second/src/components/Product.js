import React from 'react';

const Product = (props) => {
  return (
    <article className="products">
      <h1>{(props.id).charAt().toUpperCase() + (props.id).slice(1)}</h1>
    </article>
  );
}

export default Product;