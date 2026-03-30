import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products, formatPrice } from '../data/products';
import { ChevronRight, ShoppingBag, Truck, ShieldCheck, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="section-padding container text-center pt-32 h-screen flex flex-col items-center justify-center">
        <h1>Product not found</h1>
        <Link to="/collections" className="btn-primary mt-4">Return to Collections</Link>
      </div>
    );
  }

  const imgReveal = {
    hidden: { opacity: 0, clipPath: 'inset(10% 0% 10% 0%)', scale: 1.05 },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="page-content pt-32 section-padding"
    >
      <div className="container">
        {/* Breadcrumbs */}
        <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <ChevronRight size={14} />
          <Link to={`/collections?category=${product.category}`}>{product.category}</Link>
          <ChevronRight size={14} />
          <span>{product.name}</span>
        </div>

        <Link to="/collections" className="back-link">
          <ArrowLeft size={16} /> Back to Catalog
        </Link>

        {/* Product Layout */}
        <div className="product-detail-grid">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={imgReveal}
            className="product-gallery-main"
          >
            <img src={product.image} alt={product.name} className="product-image-large" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="product-info-panel"
          >
            <div className="product-tags">
              {product.tag === 'New' && <span className="badge badge-accent">New Arrival</span>}
              {product.tag === 'Best Seller' && <span className="badge badge-primary">Best Seller</span>}
            </div>
            
            <h1 className="product-title-large">{product.name}</h1>
            <p className="price-large">{formatPrice(product.price)}</p>
            
            <div className="product-description-container border-b">
              <p className="product-description">{product.description}</p>
            </div>

            <div className="product-actions mt-8">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                <input type="number" min="1" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="btn-primary btn-full-width">
                <ShoppingBag size={18} /> Add to Cart
              </button>
            </div>

            <div className="product-benefits">
              <div className="benefit-item">
                <Truck size={20} className="text-accent" />
                <span>Free delivery on orders above ₹1,00,000</span>
              </div>
              <div className="benefit-item">
                <ShieldCheck size={20} className="text-accent" />
                <span>5-year artisan warranty</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetail;
