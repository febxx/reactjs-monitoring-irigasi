import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary text-center'>
        <div className='container-fluid text-white'>
            <h3 className='mx-auto'>Smart Control Water Desa Balak</h3>
        </div>
        <div className='container text-white d-lg-none'>
            <Link to={"/"} className='btn btn-light'>Monitoring</Link>
            <Link to={"/kontrol"} className='btn btn-light'>Kontrol</Link>
            <Link to={"/tentang"} className='btn btn-light'>Tentang Kami</Link>
        </div>
    </nav>
  );
}

export default Navbar;
