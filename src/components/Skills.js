import React from 'react';

const Skills = () => {
  return (
    <div className="skills-section" id='skills'>
      <h2>My Skills</h2>
      <div className="skills-wrapper">
        {/* Technical Skills Section */}
        <div className="technical-skills">
          <h3>Technical Skills</h3>
          <div className="skill-icons">
            <div className="icon-container">
              <i className="devicon-javascript-plain colored"></i>
              <p>JavaScript</p>
            </div>
            <div className="icon-container">
              <i className="devicon-react-original colored"></i>
              <p>React</p>
            </div>
            <div className="icon-container">
              <i className="devicon-redux-original colored"></i>
              <p>Redux</p>
            </div>
            <div className="icon-container">
              <i className="devicon-nextjs-original-wordmark"></i>
              <p>Next.js</p>
            </div>
            <div className="icon-container">
              <i className="devicon-html5-plain colored"></i>
              <p>HTML5</p>
            </div>
            <div className="icon-container">
              <i className="devicon-css3-plain colored"></i>
              <p>CSS3</p>
            </div>
            <div className="icon-container">
              <i className="devicon-nodejs-plain colored"></i>
              <p>Node.js</p>
            </div>
            <div className="icon-container">
              <i className="devicon-python-plain colored"></i>
              <p>Python</p>
            </div>
            <div className="icon-container">
              <i className="devicon-git-plain colored"></i>
              <p>Git</p>
            </div>
            <div className="icon-container">
              <i className="devicon-graphql-plain colored"></i>
              <p>GraphQL</p>
            </div>
            <div className="icon-container">
              <i className="fas fa-cloud"></i>
              <p>REST API</p>
            </div>
            <div className="icon-container">
              <i className="devicon-figma-plain colored"></i>
              <p>Figma</p>
            </div>
            <div className="icon-container">
              <i className="devicon-photoshop-plain colored"></i>
              <p>Photoshop</p>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="soft-skills">
          <h3>Soft Skills</h3>
          <div className="soft-skill">
            <i className="fas fa-users"></i>
            <p>Teamwork</p>
          </div>

          <div className="soft-skill">
            <i className="fas fa-lightbulb"></i>
            <p>Problem Solving</p>
          </div>

          <div className="soft-skill">
            <i className="fas fa-comments"></i>
            <p>Communication</p>
          </div>

          <div className="soft-skill">
            <i className="fas fa-brain"></i>
            <p>Creativity</p>
          </div>

          <div className="soft-skill">
            <i className="fas fa-clock"></i>
            <p>Time Management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
