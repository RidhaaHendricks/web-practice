import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import CreatedList from './CreatedList';
import AddItem from './AddItem';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ItemDetails from './ItemDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/home">
              <Navbar />
              <Home />
              <Footer />
            </Route>
            <Route path="/created-list">
              <Navbar />
              <CreatedList />
              <Footer />
            </Route>
            <Route path="/item-list/:id">
              <Navbar />
              <ItemDetails />
              <Footer />
            </Route>
            <Route path="/addItem">
              <Navbar />
              <AddItem />
              <Footer />
            </Route>
            <Route path="/contact">
              <Navbar />
              <Contact />
              <Footer />
            </Route>
            <Route path="/about">
              <Navbar />
              <About />
              <Footer />
            </Route>
            <Route path="/sign-out">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
