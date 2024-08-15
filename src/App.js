import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import { Route,Routes } from 'react-router-dom';
import Services from './Pages/Services';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About-us' element={<About/>}/>
      <Route path='/Services' element={<Services/>}/>
      <Route path='/Contact-us' element={<Contact/>}/>
      </Routes>

    </div>
  );
}

export default App;
