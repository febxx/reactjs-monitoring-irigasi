import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className='bg-primary text-white border-end px-2 d-none d-md-block' id='sidebar-wrapper'>
        <div className='sidebar-heading text-center'>
            <h3>Menu</h3>
        </div>
        <div className='list-group text-center my-2'>
            <Link to={"/"} className="list-group-item list-group-item-action list-group-item-primary p-3 mb-2">Monitoring</Link>
            <Link to={"/kontrol"} className="list-group-item list-group-item-action list-group-item-primary p-3 mb-2">Kontrol</Link>
            <Link to={"/tentang"} className="list-group-item list-group-item-action list-group-item-primary p-3 mb-2">Tentang Kami</Link>
        </div>
    </div>
  );
}

export default Sidebar;
