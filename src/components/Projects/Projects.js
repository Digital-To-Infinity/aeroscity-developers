import { useState } from "react";
import "./Projects.css";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Code2, FolderOpen, ArrowLeft } from "lucide-react";

const projectsData = [
    {
        id: 1,
        title: "Aerocity Real Estate",
        category: "Real Estate",
        description: "A comprehensive real estate platform featuring interactive plot maps, 3D viewing experiences, and a seamless inquiry system connected to PHP backend.",
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
        tech: ["React", "PHP", "PHPMailer", "Framer Motion"],
        github: "#",
        live: "#"
    },
    {
        id: 2,
        title: "Gold & Dark Portfolio",
        category: "Personal Portfolio",
        description: "A premium portfolio website designed with a luxury aesthetic. Features advanced animations, modal interactions, and responsive layouts.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop",
        tech: ["React", "CSS3", "Lucide React"],
        github: "#",
        live: "#"
    },
    {
        id: 3,
        title: "E-Commerce Dashboard",
        category: "Dashboard",
        description: "A full-stack admin panel for managing products, orders, and users. Includes chart visualizations and dark mode support.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
        tech: ["React", "Node.js", "MongoDB", "Recharts"],
        github: "#",
        live: "#"
    },
    {
        id: 4,
        title: "Travel Agency App",
        category: "Travel",
        description: "A booking platform for travel agencies allowing users to browse destinations, book flights, and manage itineraries.",
        image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000&auto=format&fit=crop",
        tech: ["React Native", "Firebase", "API"],
        github: "#",
        live: "#"
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
                    >
                        <motion.div
                            className="modal-content list-modal"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
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
                    >
                        <motion.div
                            className="modal-content detail-modal"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 15 }}
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

                                    <div className="tech-stack">
                                        <h5>Technologies:</h5>
                                        <div className="tags">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i}><Code2 size={14} /> {t}</span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="action-buttons">
                                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="modal-btn outline">
                                            <Github size={18} /> GitHub
                                        </a>
                                        <a href={selectedProject.live} target="_blank" rel="noreferrer" className="modal-btn fill">
                                            <ExternalLink size={18} /> Live Demo
                                        </a>
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