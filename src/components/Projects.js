import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        image: require('../images/project-1-icon.ico'),
        title: 'Travel website',
        summary: '"Travelize" is a responsive React-based platform offering journey planning, personalized dashboards, dynamic maps, and a vibrant community for travelers.',
        liveDemoLink: 'https://travel-website-drab-rho.vercel.app/',
        githubLink: 'https://github.com/Famashrafs/travelize'
    },
    {
        id: 2,
        image: require('../images/project-2-icon.ico'),
        title: 'E-store',
        summary: 'Developed a fully responsive, SEO-optimized E-commerce website with 5 pages using HTML, CSS, JavaScript, and Bootstrap.',
        liveDemoLink: 'https://e-store-rust.vercel.app/',
        githubLink: 'https://github.com/Famashrafs/e-store'
    },
    {
        id: 3,
        image: require('../images/project-3-icon.ico'),
        title: 'Pizza Restaurant ',
        summary: 'Developed a fully responsive, 5-page pizza restaurant website using React, HTML, and CSS.',
        liveDemoLink: 'https://pizza-website-taupe.vercel.app/',
        githubLink: 'https://github.com/Famashrafs/Pizza-Website'
    },
    {
        id: 4,
        image: require('../images/project-4-icon.ico'),
        title: 'Weather App',
        summary: 'A responsive React-based weather app providing real-time weather updates for searched locations with a clean and user-friendly interface.',
        liveDemoLink: 'https://weather-app-ten-xi-91.vercel.app',
        githubLink: 'https://github.com/Famashrafs/weather-app'
    },
    // Add more projects as needed
];

function Projects() {
    return (
        <div className="projects" id='projects'>
            <h1 className="section-title">Projects</h1>
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}

export default Projects;
