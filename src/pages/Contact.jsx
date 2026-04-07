import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, Mail, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    honeypot: '' // Spam protection
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.staticforms.xyz/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData, // Intentionally passing honeypot field
          accessKey: import.meta.env.VITE_STATICFORMS_KEY,
          subject: 'New LuxeNest Inquiry',
        })
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
      setErrorMessage('Network error occurred. Please check your connection and try again.');
    }
  };

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
            <form className="contact-form relative" onSubmit={handleSubmit}>
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, height: 0 }} 
                    animate={{ opacity: 1, y: 0, height: 'auto' }} 
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-green-50/80 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-start gap-3 overflow-hidden"
                  >
                    <CheckCircle2 className="text-green-600 dark:text-green-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-green-800 dark:text-green-300 font-semibold mb-1 text-sm">Message Sent Successfully</h4>
                      <p className="text-sm text-green-700/80 dark:text-green-400/80">Thank you for reaching out. One of our design consultants will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, height: 0 }} 
                    animate={{ opacity: 1, y: 0, height: 'auto' }} 
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 p-4 bg-red-50/80 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-start gap-3 overflow-hidden"
                  >
                    <AlertCircle className="text-red-600 dark:text-red-500 mt-0.5 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="text-red-800 dark:text-red-300 font-semibold mb-1 text-sm">Could Not Send Message</h4>
                      <p className="text-sm text-red-700/80 dark:text-red-400/80">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="form-group mb-4">
                <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe" 
                  required 
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com" 
                  required 
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={status === 'loading'}
                />
              </div>
              <div className="form-group mb-6">
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?" 
                  rows="5" 
                  required 
                  className="w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={status === 'loading'}
                ></textarea>
              </div>

              {/* Honeypot field for spam protection */}
              <input type="text" name="honeypot" style={{ display: 'none' }} value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="btn-primary w-full inline-flex justify-center items-center gap-2 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Send Message</span>
                )}
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
