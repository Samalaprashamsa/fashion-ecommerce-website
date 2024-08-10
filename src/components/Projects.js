import React from 'react';
import './Projects.css';

import project1Image from '../assets/images/project1.png';
import project2Image from '../assets/images/project2.PNG';
import project3Image from '../assets/images/project3.png';

const projects = [
  {
    id: 1,
    image: project1Image,
    title: 'HR Analytics Dashboard',
    description: 'A brief description of the project.',
    tools: ['Python', 'Power BI'],
    challenges: 'Challenges faced during the project.',
    solutions: 'Solutions implemented to overcome challenges.',
    outcome: 'The outcome and impact of the project.',
  },
  {
    id: 2,
    image: project2Image,
    title: 'Sales Analysis Dashboard',
    description: 'A brief description of the project.',
    tools: ['SQL', 'Tableau'],
    challenges: 'Challenges faced during the project.',
    solutions: 'Solutions implemented to overcome challenges.',
    outcome: 'The outcome and impact of the project.',
  },
  {
    id: 3,
    image: project3Image,
    title: 'Cricket Analysis Report',
    description: 'A brief description of the project.',
    tools: ['SQL', 'Tableau'],
    challenges: 'Challenges faced during the project.',
    solutions: 'Solutions implemented to overcome challenges.',
    outcome: 'The outcome and impact of the project.',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="projects">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-details">
              <p><strong>Tools & Technologies:</strong> {project.tools.join(', ')}</p>
              <p><strong>Challenges:</strong> {project.challenges}</p>
              <p><strong>Solutions:</strong> {project.solutions}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </div>
            <button className="more-info">More Info</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
