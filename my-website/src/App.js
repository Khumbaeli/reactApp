import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar';
import './App.css'
import Home from './pages/home';
import About from './pages/about';
import Climb from './pages/climb';
import Gallery from './pages/gallery';
import Portfolio from './pages/portofolio';

function App() {

  return (
    <div>
          <Navbar/>
          <Routes>
            
              <Route exact path ='/' element={<Home />}/>
              <Route path="/about" element={<About />} />
              <Route path='/projects' element = {<Portfolio/>}/>
              <Route path="/climb" element={<Climb />} />
              <Route path="/photos" element={<Gallery />} />




          </Routes>
    </div>
  );
}

export default App;
