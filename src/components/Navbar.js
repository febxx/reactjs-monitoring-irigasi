import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split('/');
  return (
    <div class="category">
      <ul>
        <li><Link className={splitLocation[1] === "" ? "active" : ""} to='/' >Monitoring</Link></li>
        <li><Link className={splitLocation[1] === "kontrol" ? "active" : ""} to='/kontrol' >Kontrol</Link></li>
        <li><Link className={splitLocation[1] === "tentang" ? "active" : ""} to='/tentang' >Tentang</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
