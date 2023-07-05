import React, { useState } from 'react';
import '../style/Payment.css';

// Pendiente: adaptar la vista en mobil ✔

export const Payment = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className=" card border-0">
      <div className="card-body ">
        <div className="container-payment mb-5 mt-3  ">
          <h4 className="mb-3 mt-3 text-center">Payment Method</h4>

          <div className="row justify-content-center align-items-baseline text-center">
            <div
              className="col-sm px-0"
              style={{ width: '92px', height: '80px' }}
            >
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://img.icons8.com/?size=100&id=13610&format=png"
                alt="mastercard"
                style={{ width: '80px', height: '80px' }}
              />{' '}
            </div>
            <div
              className="col-sm px-0"
              style={{ width: '92px', height: '80px' }}
            >
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://img.icons8.com/?size=512&id=13608&format=png"
                alt="visa"
                style={{ width: '80px', height: '80px' }}
              />{' '}
            </div>
            <div
              className="col-sm px-0"
              style={{ width: '92px', height: '80px' }}
            >
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://img.icons8.com/?size=512&id=hoRdvfFbBt2g&format=png"
                alt="paypal"
                style={{ width: '80px', height: '66px' }}
                onClick={handleClick}
              />{' '}
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-sm">
              <label form="cc-name" className="form-label">
                Name on card
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-name"
                placeholder=""
                disabled={isDisabled}
                required
              />
              <small className="text-muted">
                Full name as displayed on card
              </small>
              <div className="invalid-feedback">Name on card is required</div>
            </div>
            <div className="col-sm">
              <label form="cc-number" className="form-label">
                Credit card number
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-number"
                placeholder=""
                disabled={isDisabled}
                required
              />
              <div className="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>

          <div className="row mt-2 gy-3">
            <div className="col-sm">
              <label form="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-expiration"
                placeholder="MM/YYY"
                minLength="7"
                maxLength="7"
                disabled={isDisabled}
                required
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>
            <div className="col-sm">
              <label form="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="password"
                className="form-control"
                id="cc-cvv"
                placeholder="&#9679;&#9679;&#9679;"
                minLength="3"
                maxLength="3"
                disabled={isDisabled}
                required
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>

          <hr className="my-4"></hr>

          <button
            className="container-sm mb-3 btn btn-primary btn-lg"
            type="submit"
          >
            Continue to {isDisabled ? 'Paypal' : 'Payment'}
          </button>
        </div>
      </div>
    </div>
  );
};
