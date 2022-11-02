import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';


class Kontrol extends React.Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="bg-primary mx-4 mt-4 p-4 text-white">
                    <h4>Kontrol</h4>
                </div>
                <div className="bg-primary mx-4 mt-4 p-4 text-white dt">
                    <h4>Power Pump</h4>
                    <a className="btn btn-success" href='/'>ON</a>
                    <a className="btn btn-secondary" href='/'>OFF</a>
                </div>
            </div>
        )
    }
}

export default Kontrol;
