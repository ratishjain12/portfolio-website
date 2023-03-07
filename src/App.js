
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Banner />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/resume' element={<Resume />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
