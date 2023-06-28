import React from 'react';
import '../style/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export const Headers = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-info-subtle">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Platz Merch
        </a>
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
            <i
              className="bi bi-cart3"
              style={{ fontSize: '1.8rem', cursor: 'pointer' }}
            ></i>
            <span className=" cart-quantity 1 badge bg-primary rounded-pill">3</span>
          </div>
        </div>
      </div>
    </nav>
  );
};
