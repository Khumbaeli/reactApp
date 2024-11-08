import React from 'react';
import './home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin  } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  return (
    <div>
        <div className="background"></div>
    <div className='text'>
        
        <h1>Elias Capriles</h1>
        <div className="social-icons">
            <a href="https://github.com/Khumbaeli" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/elias-capriles" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            </div>
        </div>
        </div>

  );
}
export default Home;