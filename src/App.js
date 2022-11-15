import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Monitoring from "./pages/Monitoring";
import Kontrol from "./pages/Kontrol";
import About from "./pages/About";

class App extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <section>
          <Navbar />
          <Routes>
            <Route path="/" element={<Monitoring />} />
            <Route exact path="/kontrol" element={<Kontrol />} />
            <Route exact path="/tentang" element={<About />} />
          </Routes>
        </section>
      </div>
    );
  }
}
export default App;
