import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroBlur = useTransform(scrollYProgress, [0, 0.5], ["blur(0px)", "blur(10px)"]);

  const featuredProducts = products.slice(0, 3);

  // Premium Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };
  
  const imgReveal = {
    hidden: { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)', scale: 1.05 },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
      className="page-content"
    >
      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <motion.div 
          className="hero-bg"
          style={{ 
            backgroundImage: "url('/images/hero_living_room_1774717025990.png')",
            y: heroY,
            filter: heroBlur
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1, transition: { duration: 2, ease: "easeOut" } }}
        />
        <div className="hero-overlay" />
        <motion.div 
          className="hero-content container"
          style={{ opacity }}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Redefining Comfort <br/> &amp; Luxury Living
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="hero-subtitle"
          >
            Curated pieces for a sophisticated modern home.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link to="/collections" className="btn-primary mt-4">
              Shop Collection
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Collection */}
      <section className="section-padding bg-default relative">
        <div className="glow-blob offset-right"></div>
        <div className="container relative z-10">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="section-header mb-12 flex justify-between items-end"
          >
            <h2 className="section-title mb-0">Featured Pieces</h2>
            <Link to="/collections" className="text-link font-semibold uppercase text-xs tracking-wider pb-2 border-b border-black dark:border-white hover:text-accent hover:border-accent transition-colors">View all catalogue</Link>
          </motion.div>
          
          <motion.div 
            className="products-grid text-left"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {featuredProducts.map((product) => (
              <motion.div 
                key={product.id}
                variants={fadeUp}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview section-padding bg-alt">
        <div className="container about-grid">
          <motion.div 
            className="about-image-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imgReveal}
          >
            <img src="/images/nordic_lounge_chair_1774717083970.png" alt="LuxeNest Craftsmanship" className="about-image h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <h2 className="section-title">The Art of Fine Living</h2>
            <p className="mb-6 opacity-80 text-lg">
              At LuxeNest, we believe that your home should be your sanctuary. Our pieces are thoughtfully designed with a perfect balance of minimalism, elegance, and extreme comfort. Every thread and curve speaks of uncompromising quality.
            </p>
            <Link to="/about" className="btn-outline mt-4">Discover Our Story</Link>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
