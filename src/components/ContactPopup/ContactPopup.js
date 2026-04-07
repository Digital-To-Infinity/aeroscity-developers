import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Loader2 } from 'lucide-react';
import './ContactPopup.css';
import PopupImg from '../../assets/pop-up-img.png';

const ContactPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle popup appearance every 10 seconds
  useEffect(() => {
    let timer;
    if (!isOpen && !isSubmitted) {
      timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000); 
    }
    return () => clearTimeout(timer);
  }, [isOpen, isSubmitted]);

  // Lock background scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    try {
      // In a real app, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsOpen(false);
        // Reset after submission if desired, or keep it hidden
      }, 2000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="contact-popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="contact-popup-container"
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-popup-btn" onClick={handleClose}>
              <X size={22} />
            </button>

            <div className="popup-scrollable-content">
              <div className="popup-image-container">
                <motion.img 
                  src={PopupImg} 
                  alt="Quick Contact" 
                  className="popup-top-image"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>

              <h2 className="popup-title">
                {isSubmitted ? 'Thank You!' : 'Get In Touch'}
              </h2>

              {isSubmitted ? (
                <div style={{ textAlign: 'center', color: '#ccc', padding: '20px' }}>
                  <p>We have received your message. We'll get back to you shortly!</p>
                </div>
              ) : (
                <form className="popup-form" onSubmit={handleSubmit}>
                  <div className="popup-form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="popup-form-group">
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name *"
                      required
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="popup-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="popup-form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="popup-form-group">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    type="submit"
                    className="popup-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="spin-icon" size={20} />
                    ) : (
                      <Send size={18} />
                    )}
                    {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactPopup;
