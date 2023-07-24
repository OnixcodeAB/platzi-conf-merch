import React, { useContext, useEffect } from 'react';
import '../style/Cart.css';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import CartItem from './CartItem';

export const Cart = () => {
  const {
    initialState: {
      state: { cart },
      sym,
      removeFromCart,
      handleIncrement,
      handleDecrement,
      onChangeQuantity,
    },
    Calc: { subTotal, total, calculateCartTotal },
  } = useContext(AppContext);

  useEffect(() => {
    calculateCartTotal(cart);
  }, [cart]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center my-4">
        <div className="col mb-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Cart - 2 items</h5>
            </div>
            <div className="card-body">
              {/* Single Item */}
              {cart?.map((item, idx) => (
                <CartItem
                  key={idx}
                  item={item}
                  removeFromCart={removeFromCart}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                  onChangeQuantity={onChangeQuantity}
                />
              ))}
              {/* Single Item */}
              <hr className="my-4" />
              {/* Single Item */}
              <div className="row align-items-center">
                <div className="col-sm mb-4 mb-lg-0">
                  {/* Image */}
                  <div className="image-cc text-center bg-image hover-overlay hover-zoom ripple">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/12a.webp"
                      alt="Blue Jeans Jacket"
                      className="rounded-3"
                    />
                    <a href="#">
                      <div
                        className="mask"
                        style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                      ></div>
                    </a>
                  </div>
                  {/* Image */}
                </div>

                <div className="col-sm mb-4 mb-lg-0">
                  {/* Data */}
                  <p>
                    <strong>Blue denim shirt</strong>
                  </p>
                  <p>Color: blue</p>
                  <p>Size: M</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm me-2 mb-2"
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                  <button type="button" className="btn btn-danger btn-sm mb-2">
                    <i className="bi bi-heart"></i>
                  </button>
                  {/* Data */}
                </div>

                <div className="col-sm mb-4 mb-lg-0">
                  {/* Quantity */}
                  <div className="d-flex mb-4">
                    <button
                      type="button"
                      className="btn btn-primary px-3 me-2"
                      onClick={() => handleStepDown(1)}
                    >
                      <i className="bi bi-dash"></i>
                    </button>

                    <div className="form-floating ">
                      <input
                        type="number"
                        id="form1"
                        min="0"
                        name="quantity"
                        defaultValue="2"
                        className="form-control text-center"
                      />
                      <label htmlFor="fomr1" className="form-label">
                        Quantity
                      </label>
                    </div>

                    <button
                      className="btn btn-primary px-3 ms-2"
                      onClick={() => handleStepUp(1)}
                    >
                      <i className="bi bi-plus"></i>
                    </button>
                  </div>
                  {/* Quantity */}
                  {/* Price */}
                  <p className="text-start text-md-center">
                    <strong>{sym ? sym : '$'}17.99</strong>
                  </p>
                  {/* Price */}
                </div>
              </div>
              {/* Single Item */}
            </div>
          </div>
          <div className="card mb-4">
            <div className="card-body">
              <p>
                <strong>Expected shipping delivery</strong>
              </p>
              <p className="mb-0">12.10.2020 - 14.10.2020</p>
              <p className="mb-0"></p>
            </div>
          </div>
          <div className="card mb-4 mb-lg-0">
            <div className="card-body">
              <p>
                <strong>We accept</strong>
              </p>
              <img
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                alt="Visa"
                className="col-sm me-2"
                style={{ width: '45px' }}
              />
              <img
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                alt="American Express"
                className="me-2"
                style={{ width: '50px' }}
              />
              <img
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                alt="Mastercard"
                className="me-2"
                style={{ width: '50px' }}
              />
              <img
                src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                alt="PayPal acceptance mark"
                className="me-2"
                style={{ width: '50px' }}
              />
            </div>
          </div>
        </div>
        {/*  */}
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-header py-3">
              <h5 className="mb-0">Summary</h5>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Products
                  <span>
                    {sym ? sym : '$'}
                    {subTotal}
                  </span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>
                      {sym ? sym : '$'}
                      {total}
                    </strong>
                  </span>
                </li>
              </ul>
              <Link to="/checkout">
                <button
                  type="button"
                  className="btn btn-primary btn-lg btn-block"
                >
                  Go to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
