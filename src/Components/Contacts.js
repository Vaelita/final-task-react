import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

function Contacts() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 google-map-code">
                    <Iframe width="350" height="350" className="gmap-canvas" src="https://maps.google.com/maps?q=Br%C4%ABv%C4%ABbas%20gatve%20214%2C%20Vidzemes%20priek%C5%A1pils%C4%93ta%2C%20R%C4%ABga%2C%20LV-1039&t=&z=13&ie=UTF8&iwloc=&output=embed"></Iframe>
                </div>
                <div className="col-md-8 mb-4 text-left">
                    <h5>Address:</h5>
                    <p>Brīvības gatve 214, Riga, LV-1039</p>
                    <h5>Email:</h5>
                    <Link to="" className="card-title">info@relaxpage.com</Link>
                    <h5>Phone:</h5>
                    <p>+371 26663131</p>
                </div>
            </div>
        </div>
    )   
};

export default Contacts;