import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <ul className="nav navbar-dark bg-dark">
                <li class="nav-item">
                    <Link className="nav-link" to="/" exact activeClassName="active">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/articles" activeClassName="active">Articles</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/chat" activeClassName="active">Chat</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/register" activeClassName="active">Register</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link" to="/about-us" activeClassName="active">About Us</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;