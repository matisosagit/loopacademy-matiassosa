import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Navbar } from './componentes/navbar.jsx';
import PantallaInicio from './componentes/inicio.js';
import Loop from './componentes/loop.js';
import About from './componentes/about.js';

function App() {
  return (
    <div className="App">
      <Router basename='/loopacademy-matiassosa'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<PantallaInicio/>}/>
          <Route path='/Por-Que-LoopStudio' element={<Loop/>}/>
          <Route path='/Sobre-mi' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
