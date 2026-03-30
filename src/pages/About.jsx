import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const imgReveal = {
    hidden: { opacity: 0, clipPath: 'inset(10% 10% 10% 10%)', scale: 1.05 },
    visible: { opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', scale: 1, transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] } }
  };
  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } }}
      exit={{ opacity: 0 }}
      className="page-content section-padding pt-32"
    >
      <div className="container">
        <div className="about-hero text-center mb-16">
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl font-heading mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            LuxeNest was founded on a simple principle: living spaces should be sanctuaries of comfort, wrapped in uncompromising elegance.
          </motion.p>
        </div>

        <div className="about-grid reverse items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="about-text"
          >
            <h2 className="section-title">The Vision</h2>
            <p className="mb-4">
              We started with a passion for modern design and an appreciation for timeless craftsmanship. In a world full of disposable furniture, LuxeNest represents permanence.
            </p>
            <p>
              Every piece in our collection is curated with absolute precision. We work directly with master artisans around the globe, sourcing sustainable materials without sacrificing the luxury aesthetic you crave.
            </p>
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imgReveal}
            className="about-image-wrapper h-full"
          >
            <img src="/images/hero_living_room_1774717025990.png" alt="Vision" className="about-image h-full w-full object-cover" />
          </motion.div>
        </div>

        <div className="about-grid mt-24 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imgReveal}
            className="about-image-wrapper h-full"
          >
            <img src="/images/oakwood_king_bed_1774717066458.png" alt="Craftsmanship" className="about-image h-full w-full object-cover" />
          </motion.div>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="about-text"
          >
            <h2 className="section-title">Superior Materials</h2>
            <p className="mb-4">
              From pure Italian marble to sustainable Scandinavian oak, our material selection process is rigorous. We believe that true luxury lies in what you feel, not just what you see.
            </p>
            <p>
              Explore a collection that has been trusted by interior designers to redefine the modern home experience.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
