import { useEffect } from 'react';
import './Legal.css';
import legalImg from '../../assets/legal_concept.png';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Legal = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            <Navbar />
            
            <header className="legal-header">
                <div className="legal-container">
                    <h1>Legal Excellence & Transparency</h1>
                    <p>Building trust through absolute legal clarity and verified property ownership for every investment.</p>
                </div>
            </header>

            <main className="legal-container">
                {/* Section 1: Registration First */}
                <section id="registration-policy" className="legal-section">
                    <div className="legal-content">
                        <h2>Registration First</h2>
                        <p>
                            At Aerocity Developers, we prioritize your security. We initiate and complete the official 
                            Government Registration in the customer's name before requesting final payment. 
                            This unique approach ensures that your ownership is legally binding before the 
                            transaction is fully closed.
                        </p>
                        <ul className="legal-features">
                            <li><strong style={{color: "#000000"}}>Secure Transition:</strong> Your investment is protected as you only pay once the legal title is officially transferred to you at the Sub-Registrar's office.</li>
                            <li><strong style={{color: "#000000"}}>Transparent Process:</strong> Every step of the registration is documented and shared with you in real-time.</li>
                        </ul>
                    </div>
                    <div className="legal-image-container">
                        <img src={legalImg} alt="Legal Registration" />
                    </div>
                </section>

                {/* Section 2: Core Legal Assurances */}
                <section id="legal-assurances" className="legal-section reverse">
                    <div className="legal-content">
                        <h2>Core Legal Assurances</h2>
                        <div className="assurances-grid">
                            <div className="assurance-card">
                                <h3>Clear & Marketable Title</h3>
                                <p>The property has a 30-year search history verified by legal experts. The 7/12 Extract (Satbara Utara) is updated and free from any legal disputes, litigations, or encumbrances.</p>
                            </div>
                            <div className="assurance-card">
                                <h3>Government Approvals</h3>
                                <p>Our properties are located near Navi Mumbai International Airport, Ranjanpada Station, and JNPT. They strictly adhere to Zoning Regulations and Sanctioned Township Layouts.</p>
                            </div>
                            <div className="assurance-card">
                                <h3>RERA Compliance</h3>
                                <p>We strictly follow the Real Estate (Regulation and Development) Act. For all applicable projects, we provide RERA registration numbers to ensure timely delivery and accountability.</p>
                            </div>
                            <div className="assurance-card">
                                <h3>Authority Compliance</h3>
                                <p>Full compliance with NAINA, CIDCO, and other relevant local authorities ensuring hassle-free construction and lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: Documents We Provide */}
                <section id="legal-documents" className="legal-section">
                    <div className="legal-content">
                        <h2>Documents We Provide</h2>
                        <p>To ensure a smooth ownership experience, we provide a complete set of legal documents, including:</p>
                        <ul className="legal-features">
                            <li><strong>Registered Sale Deed:</strong> The primary proof of ownership.</li>
                            <li><strong>Possession Letter:</strong> Official handover of the physical land.</li>
                            <li><strong>NOCs:</strong> No Objection Certificates from local authorities.</li>
                            <li><strong>Demarcation Map:</strong> Clearly defined boundaries of your specific plot.</li>
                        </ul>
                    </div>
                    <div className="legal-content">
                        <h2>Additional Safeguards</h2>
                        <p>We go beyond the basics to ensure your peace of mind:</p>
                        <ul className="legal-features">
                            <li><strong>Verification Assistance:</strong> We encourage and assist you in getting the documents verified by your own legal counsel.</li>
                            <li><strong>Post-Sales Support:</strong> Assistance in getting your name updated in government records (Mutation).</li>
                            <li><strong>Legal Consultation:</strong> Direct access to our legal team for any clarifications.</li>
                        </ul>
                    </div>
                </section>

                <div className="promise-box">
                    <h2>Our Promise</h2>
                    <p>
                        12 years, zero legal disputes. We don't just promise a clear title—we prove it by 
                        registering the land to you first. Your trust is our foundation.
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Legal;
