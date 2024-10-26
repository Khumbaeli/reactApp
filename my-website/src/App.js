import { BrowserRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle  } from '@fortawesome/free-brands-svg-icons';
import Navbar from './components/navbar';
import './App.css'

function App() {

  return (
    <div>
      <div className="background"></div>
            
        <div className="content">
          <BrowserRouter>
          <Navbar/>
          </BrowserRouter>
                  <div className='text'>
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
    </div>
  );
}

export default App;
