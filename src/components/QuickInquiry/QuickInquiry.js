import { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import './QuickInquiry.css';

const QuickInquiry = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    accepted: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.accepted) {
      alert('Please accept the Terms and Conditions.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Quick Inquiry Submitted:', formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', accepted: false });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Error submitting quick inquiry:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="quick-inquiry-section">
      <div className="quick-inquiry-container">
        <motion.p
          className="quick-inquiry-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          QUICK INQUIRY
        </motion.p>
        
        <motion.h2
          className="quick-inquiry-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          IF YOU HAVE ANY QUESTION? WE ARE GLAD TO CONSULT YOU AS SOON AS POSSIBLE
        </motion.h2>

        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, delay: 0.4 }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', color: '#CA1D37', padding: '20px', fontSize: '1.2rem', fontWeight: '700' }}>
              Thank you! Our consultant will contact you shortly.
            </div>
          ) : (
            <form className="form-content-wrapper" onSubmit={handleSubmit}>
              <div className="quick-inquiry-form">
                <div className="inquiry-input-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="inquiry-input-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="inquiry-submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <Loader2 className="spin-icon" size={20} />
                  ) : (
                    'SUBMIT'
                  )}
                </button>
              </div>

              <div className="inquiry-checkbox-wrapper">
                <input
                  type="checkbox"
                  id="accepted-checkbox"
                  name="accepted"
                  required
                  checked={formData.accepted}
                  onChange={handleChange}
                />
                <label htmlFor="accepted-checkbox">
                  I accept <a href="#terms">Terms & Conditions</a> for processing personal data
                </label>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInquiry;
