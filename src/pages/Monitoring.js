import "bootstrap/dist/css/bootstrap.min.css";
import { off, onValue } from "firebase/database";
import React from "react";
import "../App.css";

import DataService from "../services/crud.service";

class Monitoring extends React.Component {
  constructor(props) {
    super(props);
    this.onDataChange = this.onDataChange.bind(this);

    this.state = {
      data: [],
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
    const { data } = this.state;
    return (
      <div className="container-fluid mt-4">
        <div className="row mx-auto">
          <div className="col-6">
            <div className="appliance">
              <div className="acontent">
                <strong>Suhu Air</strong>
                <span>{data.suhu} °C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="appliance">
              <div className="acontent">
                <strong>PH Air</strong>
                <span>{data.ph} pH</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto">
          <div className="col-6">
            <div className="appliance">
              <div className="acontent">
                <strong>Kelembaban Tandon</strong>
                <span>{data.kelembaban} RH</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="appliance">
              <div className="acontent">
                <strong>Debit Air</strong>
                <span>{data.debit} m³/s</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Monitoring;
