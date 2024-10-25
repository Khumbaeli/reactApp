import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle  } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/navbar';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>
      <body>
        <div className="intro-page">
              <div className="overlay">
                  <h1>Elias Capriles</h1>
                  <div className="social-icons">
                      <a href="https://github.com/Khumbaeli" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                      </a>
                      <a href="https://linkedin.com/in/elias-capriles" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                      </a>
                      <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                          <FontAwesomeIcon icon={faGoogle} size="2x" />
                      </a>
                  </div>
              </div>
          </div>
      </body>
    </div>
  );
}

export default App;
