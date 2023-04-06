import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TopHeader from './Main';
import MovieList from './MovieList';
import Podcasts from './Podcasts';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//old function. Not in use now
function CountButton() {
  const [count, setCount] = useState(0);
  const incrementBy1 = () => setCount(count + 1);

  return (
    <div>
      <button onClick={incrementBy1}>Add 1</button>
      <br></br>
      <h4>{count}</h4>
    </div>
  );
}
//old function. Not in use now
function Counter(props: any) {
  return (
    <div>
      <button onClick={props.counting}>Add 1</button>
      <br></br>
    </div>
  );
}
//old function. Not in use now
function Amount(props: any) {
  return <h4>Count: {props.num}</h4>;
}
//old function. Not in use now
class Banner extends React.Component {
  render() {
    return (
      <div className="row">
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm p-3 mb-5  ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Podcasts
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movie Collection
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

class Conclusion extends React.Component {
  render() {
    return <h2>Give some a look</h2>;
  }
}
//main app that displays whichever route user clicks on
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" Component={TopHeader} />
          <Route path="/Podcasts" Component={Podcasts} />
          <Route path="/MovieList" Component={MovieList} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
