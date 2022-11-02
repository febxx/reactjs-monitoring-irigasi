import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom'
import Monitoring from './pages/Monitoring';
import Kontrol from './pages/Kontrol';
import About from './pages/About';

class App extends React.Component {
  render() {
    return (
      <div className="bg-image">
        <div className='d-flex' id='wrapper'>
          <Sidebar />
          <div id='page-content-wrapper'>
            <Navbar />
            <Routes>
              <Route path="/" element={<Monitoring/>} />
              <Route exact path="/kontrol" element={<Kontrol/>} />
              <Route exact path="/tentang" element={<About/>} />
            </Routes>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
