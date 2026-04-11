import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './YoutubeSection.css';

const YoutubeSection = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const videoData = [
        {
            id: 'wOnYFQ3nM84',
            title: 'Aeroscity Premium Plots',
            thumbnail: 'https://img.youtube.com/vi/wOnYFQ3nM84/maxresdefault.jpg',
            views: '12K views'
        },
        {
            id: 'L6PbpGr8RF4',
            title: 'Investment Opportunities',
            thumbnail: 'https://img.youtube.com/vi/L6PbpGr8RF4/maxresdefault.jpg',
            views: '8.5K views'
        },
        {
            id: 'gu50KnXxbVo',
            title: 'Modern Infrastructure',
            thumbnail: 'https://img.youtube.com/vi/gu50KnXxbVo/maxresdefault.jpg',
            views: '15K views'
        },
        {
            id: 'EAZBkXYGBvQ',
            title: 'Success Story 2024',
            thumbnail: 'https://img.youtube.com/vi/EAZBkXYGBvQ/maxresdefault.jpg',
            views: '20K views'
        }
    ];

    return (
        <section className="youtube-section-wrapper">
            <div className="container">
                <div className="section-header">
                    <div className="shorts-title">
                        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" className="shorts-icon">
                            <g>
                                <path d="M17.77,10.32l-1.2-.5L18,8.82a3.74,3.74,0,0,0-3.5-5.66,3.71,3.71,0,0,0-1.2.22L5.45,6.61A3.72,3.72,0,0,0,3.32,9.88,3.73,3.73,0,0,0,6.6,13.68l1.2.5L6.37,15.18a3.73,3.73,0,0,0,4.7,4.3,3.74,3.74,0,0,0,1.2-.22l7.85-3.23a3.72,3.72,0,0,0,2.13-3.27A3.73,3.73,0,0,0,17.77,10.32ZM10,14.5V9.5L14,12Z" fill="#FF0000"></path>
                            </g>
                        </svg>
                        <h2>Shorts</h2>
                    </div>
                    <p>Exclusive highlights and project updates</p>
                </div>

                <div className="shorts-grid">
                    {videoData.map((video) => (
                        <motion.div 
                            key={video.id}
                            className="shorts-card"
                            whileHover={{ scale: 1.02 }}
                            onClick={() => setSelectedVideo(video.id)}
                        >
                            <div className="thumbnail-container">
                                <img src={video.thumbnail} alt="Youtube Short" />
                                <div className="overlay">
                                    <Play className="play-icon" color="white" fill="white" size={40} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedVideo && (
                    <motion.div 
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                    >
                        <motion.div 
                            className="modal-content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-btn" onClick={() => setSelectedVideo(null)}>
                                <X size={24} />
                            </button>
                            <div className="video-player">
                                <iframe 
                                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                    title="YouTube video player" 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default YoutubeSection;
