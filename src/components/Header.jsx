import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppContext } from '../context/AppContext';

export const Headers = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  const totalItemADDed = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info-subtle">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" href="#">
          Platz Merch
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Disabled</a>
            </li>
          </ul>
          <div>
            <Link to={'/cart'}>
              <i
                className="bi bi-cart3 link-dark"
                style={{ fontSize: '2rem', cursor: 'pointer' }}
              ></i>
            </Link>

            <span className=" cart-quantity 1 badge bg-primary rounded-pill">
              {totalItemADDed}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};
