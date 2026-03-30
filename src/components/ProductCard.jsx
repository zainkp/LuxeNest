import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { formatPrice } from '../data/products';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-img-wrapper">
          <img src={product.image} alt={product.name} className="product-img" loading="lazy" />
          
          {product.tag === 'New' && <span className="badge badge-accent">New Arrival</span>}
          {product.tag === 'Best Seller' && <span className="badge badge-primary">Best Seller</span>}
          
          <button 
            className="quick-add-btn"
            onClick={(e) => {
              e.preventDefault();
              // Add to cart logic could go here
            }}
            aria-label="Add to Cart"
          >
            <ShoppingBag size={20} />
          </button>
        </div>
        <div className="product-info">
          <div className="product-category">{product.category}</div>
          <h3 className="product-title">{product.name}</h3>
          <p className="price">{formatPrice(product.price)}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
