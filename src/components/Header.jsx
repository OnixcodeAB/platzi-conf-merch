import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { AppContext } from '../context/AppContext';
import { usePayPalScriptReducer } from '@paypal/react-paypal-js';

const Currency = ['USD', 'CAD', 'EUR', 'GBP'];
const CurrencySymbol = ['$', '$', '€', '£'];

export const Headers = () => {
  const [currSym, setCurrSym] = useState('$USD');
  const [{ options }, dispatch] = usePayPalScriptReducer();
  const {
    initialState: {
      state: { cart },
      getCurrency,
    },
    Calc: { cartItem, countItemsInCart },
  } = useContext(AppContext);

  useEffect(() => {
    countItemsInCart(cart);
  }, [cart]);

  const onChangeCurrency = (curr, idx) => {
    if (Currency[idx] === curr) {
      const newCurrency = `${CurrencySymbol[idx]}${Currency[idx]}`;
      setCurrSym(newCurrency);
      getCurrency(Currency[idx], CurrencySymbol[idx]);
      dispatch({
        type: 'resetOptions',
        value: {
          ...options,
          currency: Currency[idx],
        },
      });
    }
  };

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
           {/*  <li className="nav-item">
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
            </li> */}
          </ul>
          <div className="d-flex align-items-center">
            <div className="dropdown-center pe-3">
              <button
                className="btn btn-info dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {currSym}
              </button>
              <ul
                className="dropdown-menu dropdown-menu-ligth"
                style={{ left: '-3px' }}
              >
                {Currency.map((curr, idx) => (
                  <li key={idx}>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={(e) => onChangeCurrency(e.target.innerText, idx)}
                    >
                      {curr}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <Link to={'/cart'}>
              <i
                className="bi bi-cart3 link-dark"
                style={{ fontSize: '2rem', cursor: 'pointer' }}
              ></i>
              <span className=" cart-quantity 1 badge bg-primary rounded-pill">
                {cartItem}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
