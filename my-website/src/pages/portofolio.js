import React from 'react';
import './portfolio.css'; // Import the CSS file

const Portfolio = () => {
  const projects = [
    {
      name: 'Image Classification with SVMs',
      description: 'Machine learning model to classify pictures.',
      link: 'https://colab.research.google.com/drive/1XsaK3hMX9Lr5-ztvD9UQX4B6FxC4uOlF?usp=drive_link'
    },
    {
      name: 'Forest Fire Classification with SVMs',
      description: 'Used Remotely sensed data and ML to identify wildfires.',
      link: 'https://colab.research.google.com/drive/1NvrzEsBBU7ajvkPRnIcR-lr7pOyATi2f?usp=drive_link'
    }
    // Add more projects as needed
  ];

  return (
    <div className="portfolio">
      <h2 className="portfolio-heading">My Portfolio</h2>
      <ul className="project-list">
        {projects.map((project, index) => (
          <li key={index} className="project-item">
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
