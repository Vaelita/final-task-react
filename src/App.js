import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from './Views/Home';
import AboutUs from './Views/AboutUs';
import Articles from './Views/Articles';
import Article from './Views/Article';
import Chat from './Views/Chat';
import Registration from './Views/Registration';


function App() {
  return (
    <div>
      <Router >
        <Header />

        <div className="container">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/articles">
                    <Articles />
                </Route>
                <Route path="/article">
                    <Article />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/register">
                    <Registration />
                </Route>
                <Route path="/about-us">
                    <AboutUs />
                </Route>
            </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
