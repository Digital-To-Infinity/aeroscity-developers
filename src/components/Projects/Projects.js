import { useState, useEffect } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import kscImg from "../../assets/projects/ksc_township.png";
import nainaImg from "../../assets/projects/naina_township.png";
import raigadImg from "../../assets/projects/raigad_pen.png";


const projectsData = [
    {
        id: 1,
        title: "KSC Township (Karnala-Sai-Chirner)",
        category: "Smart City Development",
        description: `OVERVIEW AND ADMINISTRATION:
• Official Name: Karnala-Sai-Chirner (KSC) New Town.
• Nodal Agency: MMRDA (appointed as the New Town Development Authority (NTDA) in October 2024).

STRATEGIC LOCATION & CONNECTIVITY:
The township is designed to be the most well-connected hub in India, leveraging several mega-projects:
• MTHL (Atal Setu): The 22 km sea bridge provides a 20-minute connection to South Mumbai (Sewri).
• Navi Mumbai International Airport (NMIA): KSC is built around the influence zone of the airport, expected to be operational by mid-2025.
• JNPT Port: Proximity to the port makes it a prime location for logistics and international trade.
• Mass Transit: Includes the Navi Mumbai Metro, the Multi-Modal Corridor (connecting Virar to Alibaug), and the coastal road.
• Railways: Enhanced connectivity via the Nerul-Uran railway line (including stations like Ranjanpada).

KEY DEVELOPMENT HUBS ("THE CITY OF FUTURE"):
MMRDA plans to develop specific sectors to ensure KSC is an economic powerhouse:
• Edu City: A hub for international education, aiming to house campuses of the world’s top universities.
• Medi City: A world-class healthcare and biotech district.
• Data Center Hub: Projected to host 65% of India’s data centers, backed by investments from companies like Blackstone and RIL.
• Global Capability Centers (GCC): Specific zones for MNCs and financial institutions.`,
        image: kscImg,
    },
    {
        id: 2,
        title: "NAINA (Navi Mumbai Airport Influence Notified Area)",
        category: "Urban Planning & Infrastructure",
        description: `OVERVIEW:
• NAINA is one of the most significant urban planning projects in India, managed by CIDCO (City and Industrial Development Corporation).
• This township is a core part of the region's future, designed as a planned "Third Mumbai" to prevent unplanned growth around the upcoming Navi Mumbai International Airport (NMIA).

STRATEGIC LOCATION & CONNECTIVITY:
• Transportation Corridors: Proximity to the Atal Setu (MTHL) and the Virar-Alibaug Multi-Modal Corridor.
• Rail Connectivity: Integrated with the Panvel-Karjat suburban rail line and the upcoming Navi Mumbai Metro.
• Economic Hubs: Planned clusters for IT, trade, services, and "Edu-cities."

KEY DEVELOPMENT (THE 60:40 LAND POOLING MODEL):
Unlike traditional land acquisition, NAINA uses a Town Planning Scheme (TPS):
• Landowner Contribution (60%): Landowners surrender 60% of their land to CIDCO for city-level infrastructure like 30-meter wide roads, parks, schools, and hospitals.
• Returned Land (40%): In exchange, CIDCO returns 40% of the land to the owner as a "Final Plot" with a high FSI of 2.5 for premium development.
• Development Status: Divided into 12 distinct schemes (TPS). TPS 1 & 2 are the most advanced, with final approvals and property cards being distributed. TPS 3 to 7 have received preliminary approval and infrastructure work is underway.
• Betterment Charges: In 2025, CIDCO significantly reduced betterment charges (from 50% to 0.05%) to encourage faster development and affordability.`,
        image: nainaImg,
    },
    {
        id: 3,
        title: "Raigad Pen Growth Center",
        category: "Economic Hub & Industrial Development",
        description: `OVERVIEW:
• Raigad Pen Growth Center is a strategic initiative by the MMRDA to decentralize urban growth and foster economic development in the Raigad district.
• It is designed to be a self-sustained industrial and commercial hub, leveraging Raigad's natural and geographical advantages.

STRATEGIC LOCATION & CONNECTIVITY:
• Virar-Alibaug Multi-Modal Corridor: This major expressway will pass through the region, slashing travel times to Mumbai, JNPT, and Navi Mumbai.
• Proximity to JNPT: Being close to India's largest container port, it serves as an ideal location for logistics and warehousing hubs.
• Upcoming New Townships: Integrates with the broader vision of "Third Mumbai" and sustainable urban expansion in the Pen-Alibaug belt.

ECONOMIC & INDUSTRIAL FOCUS:
• Logistics Parks: Planned as a primary hub for global supply chain management and storage facilities.
• Agro-Industry & Manufacturing: Encouraging local and international industries to set up units, creating thousands of jobs.
• Residential Development: Providing affordable and high-quality housing for the workforce and investors in a green, planned environment.`,
        image: raigadImg,
    }

];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedProject]);

    return (
        <section className="projects-section" id="projects">
            <div className="container">
                <motion.div 
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle">Our Portfolio</span>
                    <h2 className="section-title">Strategic <span className="highlight">Projects</span></h2>
                    <div className="title-underline"></div>
                </motion.div>

                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="project-image-container">
                                <img src={project.image} alt={project.title} className="project-image" />
                                <div className="project-overlay">
                                    <div className="view-btn">
                                        <span>View details</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <span className="project-category">{project.category}</span>
                                <h3 className="project-title">{project.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* --- PROJECT DETAIL MODAL --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal-content"
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
                                <X size={24} />
                            </button>

                            <div className="modal-scroll-area">
                                <div className="modal-hero">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                    <div className="modal-hero-overlay">
                                        <span className="modal-category">{selectedProject.category}</span>
                                        <h2 className="modal-title">{selectedProject.title}</h2>
                                    </div>
                                </div>

                                <div className="modal-body">
                                    <div className="description-content">
                                        {selectedProject.description.split('\n\n').map((paragraph, i) => (
                                            <div key={i} className="description-paragraph">
                                                {paragraph.split('\n').map((line, j) => {
                                                    if (line.endsWith(':') || (line.startsWith('•') === false && line === line.toUpperCase() && line.length > 5)) {
                                                        return <h4 key={j} className="desc-heading">{line}</h4>;
                                                    }
                                                    return <p key={j} className="desc-text">{line}</p>;
                                                })}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};


export default Projects;