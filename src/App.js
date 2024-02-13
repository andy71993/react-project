import About from './About';
import './App.css';
import Home from './Home';
import { Link, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Nav className={'navbar'}/>
      <Footer />
      <Routes>
        <Route path='/' element={<Home className='main'/>} />
        <Route path='/about' element={<About className='main'/>} />
      </Routes>
    </>
  );
}

export default App;
