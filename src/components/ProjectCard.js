import React from 'react';

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <div className="project-card-inner">
                <div className="project-card-front" style={{backgroundImage: `url(${project.image})`}}>
                </div>
                <div className="project-card-back">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <div className="project-links">
                        <a className="project-btn" href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
                        <a className="project-btn" href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
