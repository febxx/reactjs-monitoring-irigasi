import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import '../App.css';


class About extends React.Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <div className="bg-primary mx-4 mt-4 p-4 text-white">
                    <h4>Tentang Kami</h4>
                </div>
                <div className="bg-primary mx-4 mt-4 p-4 text-white dt">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aspernatur, laborum accusantium itaque expedita ad aperiam esse nisi? Fuga quaerat suscipit dicta asperiores exercitationem maxime. Non neque suscipit obcaecati vel?</p>
                </div>
            </div>
        )
    }
}

export default About;
