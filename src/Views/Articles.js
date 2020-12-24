import { Link } from 'react-router-dom';
import meditate from '../Assets/Images/meditate.jpg';
import PaginationThing from '../Components/PaginationThing';


function Articles() {
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/"> <img src={meditate} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/">Support</Link>
                            <p className="card-text">
                                asdfghjkjhhgghj,hgfgfghjhgfdfdghj,hgrhjh,hgrfhgjnhgfghgdghmgfhgdghjhdgdg
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/"> <img src={meditate} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/">Support</Link>
                            <p className="card-text">
                                asdfghjkjhhgghj,hgfgfghjhgfdfdghj,hgrhjh,hgrfhgjnhgfghgdghmgfhgdghjhdgdg
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/"> <img src={meditate} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/">Support</Link>
                            <p className="card-text">
                                asdfghjkjhhgghj,hgfgfghjhgfdfdghj,hgrhjh,hgrfhgjnhgfghgdghmgfhgdghjhdgdg
                            </p>
                        </div>
                    </div>
                </div>
                <PaginationThing />
            </div>
        </div>
    );
}

export default Articles;