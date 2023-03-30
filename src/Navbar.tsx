import React from 'react';
import { Link } from 'react-router-dom';

const navbar = () => {
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Podcasts">
                  Podcasts
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/MovieList">
                  Movie List
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default navbar;