import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import supportcat from "../Assets/Images/supportcat.jpg";
import comfort from "../Assets/Images/comfort.jpg";
import moodatm from "../Assets/Images/moodatm.jpg";

function Cards() {
    return (
        
        <div className="container mb-5">
            <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="card border border-dark">
                    <Card.Img variant="top" src={supportcat} />
                    <Card.Body>
                        <Card.Title><Link className="card-title" to="/article">Support</Link></Card.Title>
                        <Card.Text>
                            Let's just take a little time to discuss the importance of a favorable
                            support in your personal space.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="card border border-dark">
                    <Card.Img variant="top" src={comfort} />
                    <Card.Body>
                        <Card.Title><Link className="card-title" to="/article">Comfort</Link></Card.Title>
                        <Card.Text>
                            When you think you're alone, it's not really alone time. 
                            Quality alone time is when you focus this attention inward.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
                <Card className="card border border-dark">
                    <Card.Img variant="top" src={moodatm} />
                    <Card.Body>
                        <Card.Title><Link className="card-title" to="/article">Atmosphere</Link></Card.Title>
                        <Card.Text>
                            Taking a deep breath proves makes you calmer, minimizes stress, and 
                            provides the body a healthy dose of oxygen.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            </div>
        </div>
    )
}

export default Cards;