import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useEffect, useState } from "react";
import DateService from "../services/date.service";

function Navbar() {
  const [data, setData] = useState({});
  useEffect(() => {
    setData({
      day: DateService.getHari(),
      date: DateService.getTanggal(),
    })
  }, []);

  return (
    <header>
      <div class="f fe">
        <img src="logo.png" alt="" class="logo" />
        <div class="heading">
          <h5 class="date">
            {data.day}, {data.date}
          </h5>
          <h3 class="title">Smart Control Water</h3>
          <h5 class="title">Desa Balak</h5>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
