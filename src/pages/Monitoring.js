import "bootstrap/dist/css/bootstrap.min.css";
import { off, onValue } from "firebase/database";
import React from "react";
import "../App.css";

import DataService from "../services/crud.service";
import DateService from "../services/date.service";

class Monitoring extends React.Component {
  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      data: [],
      day: DateService.getHari(),
      date: DateService.getTanggal()
    };
  }

  componentDidMount() {
    onValue(DataService.getAll(), this.onDataChange);
  }

  componentWillUnmount() {
    off(DataService.getAll(), this.onDataChange);
  }

  onDataChange(items) {
    let data = {};

    items.forEach((item) => {
      let key = item.key;
      let value = item.val();
      data[key] = value;
    });

    this.setState({
      data: data,
    });
  }

  render() {
    const { data, date, day } = this.state;
    return (
      <div className="container-fluid text-center">
        <div className="bg-primary mx-4 mt-4 p-4 text-white">
          <h4>Instalasi Irigasi Air Bersih Masyarakat Desa Balak, Songgon</h4>
        </div>
        <div className="bg-primary mx-4 mt-4 p-4 text-white dt">
          <h4>Monitoring</h4>
          <div className="row">
            <div className="col">Hari :</div>
            <div className="col">Tanggal :</div>
          </div>
          <div className="row">
            <div className="col">{day}</div>
            <div className="col">{date}</div>
          </div>
          <div className="row my-4">
            <div className="col">
              <div className="card bg-primary">
                <h6 className="card-header">Kelembaban Tandon</h6>
                <div className="card-body">
                  <h6 className="card-title">{data.kelembaban} RH</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-primary">
                <h6 className="card-header">Suhu Air</h6>
                <div className="card-body">
                  <h6 className="card-title">{data.temperatur} °C</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="card bg-primary">
                <h6 className="card-header">pH Air</h6>
                <div className="card-body">
                  <h6 className="card-title">0 pH</h6>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card bg-primary">
                <h6 className="card-header">Debit Air</h6>
                <div className="card-body">
                  <h6 className="card-title">{data.debit} m³/s</h6>
                  {console.log(data)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitoring;
