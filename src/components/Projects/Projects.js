import { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, FolderOpen, ArrowLeft } from "lucide-react";
import kscImg from "../../assets/projects/ksc_township.png";
import nainaImg from "../../assets/projects/naina_township.png";

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
    }
];

const Projects = () => {
    const [isListOpen, setIsListOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    // Close everything
    const closeAll = () => {
        setIsListOpen(false);
        setSelectedProject(null);
    };

    return (
        <section className="projects-section" id="projects">
            <div className="container center-trigger">

                {/* --- MAIN TRIGGER CARD --- */}
                <motion.div
                    className="projects-trigger-card"
                    onClick={() => setIsListOpen(true)}
                    whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(197, 160, 89, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="trigger-icon">
                        <FolderOpen size={60} strokeWidth={1.5} />
                    </div>
                    <h2>View All Projects</h2>
                    <p>Click to explore my work gallery</p>
                </motion.div>

            </div>

            {/* --- PROJECTS LIST MODAL --- */}
            <AnimatePresence>
                {isListOpen && (
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAll}
                    >
                        <motion.div
                            className="modal-content list-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <h3>My <span className="gold-text">Work</span></h3>
                                <button className="close-btn" onClick={closeAll}>
                                    <X />
                                </button>
                            </div>

                            <div className="projects-grid-scroll">
                                {projectsData.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        className="project-grid-item"
                                        onClick={() => setSelectedProject(project)}
                                        whileHover={{ y: -5, borderColor: "#c5a059" }}
                                    >
                                        <div className="grid-image">
                                            <img src={project.image} alt={project.title} />
                                            <div className="grid-overlay">
                                                <span>View Details</span>
                                            </div>
                                        </div>
                                        <div className="grid-info">
                                            <h4>{project.title}</h4>
                                            <span className="category-tag">{project.category}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- PROJECT DETAIL MODAL --- */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="modal-overlay detail-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeAll}
                    >
                        <motion.div
                            className="modal-content detail-modal"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="modal-header">
                                <button className="back-btn" onClick={() => setSelectedProject(null)}>
                                    <ArrowLeft /> Back to List
                                </button>
                                <button className="close-btn" onClick={closeAll}>
                                    <X />
                                </button>
                            </div>

                            <div className="detail-body">
                                <div className="detail-image">
                                    <img src={selectedProject.image} alt={selectedProject.title} />
                                </div>

                                <div className="detail-info">
                                    <h2>{selectedProject.title}</h2>
                                    <span className="detail-category">{selectedProject.category}</span>

                                    <p className="detail-desc">{selectedProject.description}</p>
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