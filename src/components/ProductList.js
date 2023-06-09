import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    
    <div className="product-list">
      
      <h1>Featured Products</h1>
      <div className="carousel-container">
        <Carousel transitionTime={500}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Carousel>
      </div>
    </div>
  );
  
};

export default ProductList;
