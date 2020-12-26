import { Link } from 'react-router-dom';
import PaginationThing from '../Components/PaginationThing';
import supportcat from "../Assets/Images/supportcat.jpg";
import comfort from "../Assets/Images/comfort.jpg";
import moodatm from "../Assets/Images/moodatm.jpg";

function Articles() {
    return (
        <div className="container">
            <div className="col">
                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/article"> <img src={supportcat} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/article">Support</Link>
                            <p className="card-text">
                                Let's just take a little time to discuss the importance of a favorable
                                support in your personal space.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/article"> <img src={comfort} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/article">Comfort</Link>
                            <p className="card-text">
                                When you think you're alone, it's not really alone time. 
                                Quality alone time is when you focus this attention inward.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col"> 
                        <Link className="nav-link" to="/article"> <img src={moodatm} alt="" style={{width:'300px'}} /> </Link>
                    </div>
                    <div className="col"> 
                        <div className="card-body text-left">
                            <Link className="nav-link card-title" to="/article">Atmosphere</Link>
                            <p className="card-text">
                                Taking a deep breath proves makes you calmer, minimizes stress, and 
                                provides the body a healthy dose of oxygen.
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