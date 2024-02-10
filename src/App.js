import About from './About';
import './App.css';
import Home from './Home';
import { Link, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about' className='nav-item'>About</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
