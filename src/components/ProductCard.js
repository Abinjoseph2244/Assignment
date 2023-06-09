import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.price}</p>
      <p>{product.rating.rate} ({product.rating.count} reviews)</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductCard;
