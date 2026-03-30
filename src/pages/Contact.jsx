import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-content section-padding pt-32"
    >
      <div className="container">
        <div className="contact-hero text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl font-heading mb-4"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-gray-500 max-w-2xl mx-auto"
          >
            Our design consultants are here to help you select the perfect pieces for your sanctuary.
          </motion.p>
        </div>

        <motion.div
          className="contact-grid"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
          }}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="contact-info bg-card p-8 rounded-lg shadow-sm relative overflow-hidden"
          >
            <div className="glow-blob offset-left opacity-30"></div>
            <h2 className="text-2xl font-heading font-semibold mb-6 relative z-10">Contact Information</h2>

            <div className="contact-item flex items-start gap-4 mb-6 relative z-10">
              <MapPin className="text-accent mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Studio Location</h4>
                <p className="text-gray-500">123 Luxury Avenue,<br />Dynasty Business Park, 400059<br />Mumbai, Maharashtra, India</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4 mb-6 relative z-10">
              <Phone className="text-accent mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Phone</h4>
                <p className="text-gray-500">+91 75618 43714</p>
              </div>
            </div>

            <div className="contact-item flex items-start gap-4 mb-6 relative z-10">
              <Mail className="text-accent mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-gray-500">luxenest.india@hotmail.com</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 30 },
              visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="contact-form-wrapper bg-card p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group mb-4">
                <label className="block text-sm font-semibold mb-2">Full Name</label>
                <input type="text" placeholder="John Doe" required className="w-full" />
              </div>
              <div className="form-group mb-4">
                <label className="block text-sm font-semibold mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" required className="w-full" />
              </div>
              <div className="form-group mb-6">
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea placeholder="How can we help you?" rows="5" required className="w-full"></textarea>
              </div>
              <button type="submit" className="btn-primary w-full inline-flex justify-center">
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="map-placeholder mt-16 bg-gray-200 dark:bg-gray-800 rounded-lg h-96 flex items-center justify-center text-gray-500"
        >
          <span>Map Interface Integration</span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
