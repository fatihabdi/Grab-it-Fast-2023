import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs';
import Home from './Pages/Home';
import LineUp from './Pages/LineUp';
import Maps from './Pages/Maps';
import Media from './Pages/Media';
import Praevent from './Pages/Praevent';
import Mainevent from './Pages/Mainevent';
import Mascot from './Pages/Mascot';
import Theme from './Pages/Theme';
import ThrowbackPage from './Pages/ThrowbackPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/lineup' element={<LineUp />}  />
          <Route path='/maps' element={<Maps />}  />
          <Route path='/media' element={<Media />}  />
          <Route path='/praevent' element={<Praevent />}  />
          <Route path='/mainevent' element={<Mainevent />}  />
          <Route path='/mascot' element={<Mascot />}  />
          <Route path='/theme' element={<Theme />}  />
          <Route path='/throwback' element={<ThrowbackPage />}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
