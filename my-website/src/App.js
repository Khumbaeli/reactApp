import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import './App.css'
import Home from './pages/home';
import About from './pages/about';

function App() {

  return (
    <div>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            
              <Route exact path ='/' element={<Home />}/>
  
        
              <Route path="/about" element={<About />} />

          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
