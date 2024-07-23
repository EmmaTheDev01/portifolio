import React, { useState, useEffect, useRef, useContext } from 'react';
import projectImage1 from '../assets/project1.png';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.png';
import projectImage4 from '../assets/project4.png';
import projectImage5 from '../assets/project5.png';
import { AppContext } from '../context/AppContext';
import Contact from './Contact'; // Import the Contact component
import './story.css'; // Import the CSS file

// ContactFormModal Component
const ContactFormModal = ({ onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                <Contact /> {/* Use the Contact component here */}
            </div>
        </div>
    );
};

const Projects = ({ mode }) => {
    const { storiesCompleted } = useContext(AppContext);

    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [showContactModal, setShowContactModal] = useState(false); // State for showing contact form modal

    const projectsContainerRef = useRef(null);
    const scrollTimeoutRef = useRef(null);

    const projects = [
        {
            id: "Guriraline",
            description:
                'Ecommerce multivendor site, built with MERN stack. This project contains dashboard, payment system, shop creation and more. It was built to support local businesses to sell their products easily.', 
            image: projectImage1,
        },
        {
            id: "Guriraline PTC",
            description:
                'This site was built with MERN stack. It was built to support to support local businesses to advertise their services easily also allowing users to earn money from it by watching ads and doing surveys.',
            image: projectImage2,
        },
        {
            id: "Prodi.rw",
            description:
                'Wordpress ecommerce site that was built with Elementor, this site is for a wholesale distributor of foods that allows users to order goods for sale.',
            image: projectImage3,
        },
        {
            id: "Lightcenter.rw",
            description:
                'Wordpress Non-profit website that provides easy, accessible and affordable education to students in Rwanda.',
            image: projectImage4,
        },
        {
            id: "Kotana Game",
            description:
                'Web multiplayer game built with HTML, CSS and JavaScript that handles 2 player competion in real time. This game updates the scores and manage users using MongoDB.',
            image: projectImage5,
        },
    ];

    // Throttle function to limit the rate of scroll handling
    const throttle = (callback, limit) => {
        let lastCall = 0;
        return (...args) => {
            const now = new Date().getTime();
            if (now - lastCall < limit) return;
            lastCall = now;
            callback(...args);
        };
    };

    const handleWheel = throttle((event) => {
        event.preventDefault();

        if (scrollTimeoutRef.current) {
            clearTimeout(scrollTimeoutRef.current);
        }

        scrollTimeoutRef.current = setTimeout(() => {
            const delta = Math.sign(event.deltaY);

            if (delta > 0 && currentProjectIndex < projects.length - 1) {
                setCurrentProjectIndex(currentProjectIndex + 1);
            } else if (delta < 0 && currentProjectIndex > 0) {
                setCurrentProjectIndex(currentProjectIndex - 1);
            }

            // Adjust the scrollLeft of the container to scroll horizontally
            if (projectsContainerRef.current) {
                projectsContainerRef.current.scrollLeft += event.deltaY;
            }
        }, 50); // Increased delay for smoother transition
    }, 100); // Throttling the wheel event

    // Start drag event
    const handleMouseDown = (event) => {
        setIsDragging(true);
        setStartX(event.pageX - projectsContainerRef.current.offsetLeft);
        setScrollLeft(projectsContainerRef.current.scrollLeft);
    };

    // During dragging
    const handleMouseMove = (event) => {
        if (!isDragging) return;
        const x = event.pageX - projectsContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed factor
        projectsContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // End drag event
    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const openContactModal = () => {
        setShowContactModal(true);
    };

    const closeContactModal = () => {
        setShowContactModal(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            // Scroll to the next section only if stories are completed
            if (storiesCompleted) {
                const nextSection = document.getElementById('nextSection');
                if (nextSection) {
                    nextSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [storiesCompleted]);

    useEffect(() => {
        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
        } else {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging]);

    return (
        <div
            id='projects'
            className={`min-h-screen z-100 flex justify-center items-center relative overflow-hidden ${mode === 'dark' ? 'bg-slate-800 text-white' : 'bg-[#e9eaec] text-gray-800'}`}
            onWheel={handleWheel}
        >
            {/* Background Overlay */}
            <div className={`absolute inset-0 ${mode === 'dark' ? 'bg-slate-900' : 'bg-gray-100'} opacity-40`}></div>

            {/* Projects Content */}
            <div className="z-10 relative text-center">
                <h1
                    className={`text-4xl md:text-6xl font-bold mt-8 mb-8`}
                    style={{ transition: 'opacity 1s ease-out' }}
                >
                    Projects
                </h1>

                <div
                    ref={projectsContainerRef}
                    className="projects-container max-w-screen-xl mx-auto p-4 overflow-x-auto scrollbar-hidden flex cursor-grab"
                    style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
                    onMouseDown={handleMouseDown}
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="max-w-screen-2xl mx-auto p-4 flex-none h-screen"
                        >
                            <div className="max-w-screen flex justify-start items-center h-full project-image-container">
                                <div className="p-4">
                                    <p className="text-lg font-semibold mb-2">{project.id}</p>
                                    <p className="text-sm w-[500px]">{project.description}</p>
                                </div>
                                <div className="mt-4 w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={`Project ${project.id}`}
                                        className="rounded-lg shadow-md project-image"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
