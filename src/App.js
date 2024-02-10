import About from './About';
import './App.css';
import Home from './Home';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header>

      </Header>
      <Nav>
        <Link to='/' className='nav-item'>Home</Link>
        <Link to='/about' className='nav-item'>About</Link>
      </Nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
