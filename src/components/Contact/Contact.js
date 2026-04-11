import { useState } from 'react';
import './Contact.css';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); 
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    // 2. Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // 3. Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsFormSubmitted(true);

        if (!e.target.checkValidity()) {
            return;
        }

        setStatus('submitting');

        try {
            // Updated URL to match the folder structure created in Step 1
            const response = await fetch('http://localhost/contact.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const text = await response.text();
            console.log("Raw Server Response:", text);

            let result;
            try {
                result = JSON.parse(text);
            } catch (err) {
                throw new Error("Server returned invalid JSON: " + text);
            }

            if (result.status === 'success') {
                setStatus('success');
                setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                setIsFormSubmitted(false);
                // setTimeout(() => setStatus('idle'), 5000); // Removed to keep success message visible
            } else {
                console.error("PHP Error:", result.message);
                setStatus('error');
            }
        } catch (error) {
            console.error("Network Error:", error);
            setStatus('error');
        }
    };

    return (
        <section className="contact-section" id="contact">
            <div className="container">

                {/* Header */}
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2>Get in Touch</h2>
                    <p>Have a project in mind or need a quote? We're here to help.</p>
                </motion.div>

                <div className="contact-wrapper">

                    {/* LEFT: Contact Form */}
                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {/* Success Message */}
                        {status === 'success' ? (
                            <motion.div
                                className="form-message success-message"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                style={{ textAlign: 'center', padding: '40px 20px' }}
                            >
                                <div style={{ marginBottom: '20px', color: '#2ecc71' }}>
                                    <Send size={48} />
                                </div>
                                <h3 style={{ color: '#CA1D37', marginBottom: '10px' }}>Message Sent!</h3>
                                <p style={{ color: '#1a1a1a' }}>Thank you for reaching out. We will get back to you shortly.</p>
                            </motion.div>
                        ) : (
                            <>
                                {/* Error Message */}
                                {status === 'error' && (
                                    <div className="form-message error-message">
                                        <strong>Error!</strong> Could not send message. Check console for details.
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className={`custom-form ${isFormSubmitted ? 'form-submitted' : ''}`} noValidate>
                                    <div className="form-group">
                                        <input type="text" name="name" id="name" placeholder=" " required value={formData.name} onChange={handleChange} />
                                        <label htmlFor="name">Your Name *</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" name="company" id="company" placeholder=" " required value={formData.company} onChange={handleChange} />
                                        <label htmlFor="company">Company Name *</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" id="email" placeholder=" " value={formData.email} onChange={handleChange} />
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                    <div className="form-group">
                                        <input type="tel" name="phone" id="phone" placeholder=" " required value={formData.phone} onChange={handleChange} />
                                        <label htmlFor="phone">Phone Number *</label>
                                    </div>
                                    <div className="form-group full-width">
                                        <textarea name="message" id="message" placeholder=" " value={formData.message} onChange={handleChange}></textarea>
                                        <label htmlFor="message">Your Message</label>
                                    </div>

                                    <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                                        {status === 'submitting' ? (
                                            <><Loader2 className="spin-icon" size={18} /> Sending</>
                                        ) : (
                                            <><Send size={18} /> Send Message</>
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </motion.div>

                    {/* RIGHT: Contact Info */}
                    <motion.div
                        className="contact-info-container"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <h3>Contact Information</h3>
                        <p className="info-intro">Feel free to reach out to us through any of the following methods:</p>

                        <div className="info-list">
                            <div className="info-item">
                                <div className="icon-box"><MapPin /></div>
                                <span>Navi Mumbai, Maharashtra, India</span>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Phone /></div>
                                <a href="tel:+918956222950">+91 (895) 622-2950</a>
                            </div>
                            <div className="info-item">
                                <div className="icon-box"><Mail /></div>
                                <a href="mailto:vvikasindia@gmail.com">info@aerocitydevelopers.com</a>
                            </div>
                        </div>

                        <div className="map-container">
                            <iframe
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.467885966453!2d73.0163!3d19.0416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3c0c0c0c0c1%3A0x0!2zMTnCsDAyJzI5LjgiTiA3M8KwMDAnNTguNyJF!5e0!3m2!1sen!2sin!4v1633000000000!5m2!1sen!2sin"
                                width="100%" height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Contact;