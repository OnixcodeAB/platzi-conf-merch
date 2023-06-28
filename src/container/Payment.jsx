import React, { useState } from 'react';
import '../style/Payment.css';

export const Payment = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <form>
      <div className=" card container my-3" style={{ width: '800px' }}>
        <div className="card-body">
          <h4 className="mb-3">Payment Method</h4>

          <div className="row justify-content-md-center mb-4 p-0 radio-group">
            <div className="radio selected col-md-auto">
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://img.icons8.com/?size=100&id=13610&format=png"
                alt="mastercard"
                style={{ width: '110px', height: '60px' }}
              />{' '}
            </div>

            <div className="radio selected col-md-auto">
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://i.imgur.com/OdxcctP.jpg"
                alt="visa"
                style={{ width: '110px', height: '60px' }}
              />{' '}
            </div>

            <div className="radio selected col-md-auto">
              {' '}
              <img
                className="rounded rounded-2 "
                src="https://i.imgur.com/cMk1MtK.jpg"
                alt="paypal"
                style={{ width: '110px', height: '60px' }}
                onClick={handleClick}
              />{' '}
            </div>
          </div>

          <div className="row gy-3">
            <div className="col-md-6">
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

            <div className="col-md-6">
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

            <div className="col-md-3">
              <label form="cc-expiration" className="form-label">
                Expiration
              </label>
              <input
                type="date"
                className="form-control"
                id="cc-expiration"
                placeholder=""
                disabled={isDisabled}
                required
              />
              <div className="invalid-feedback">Expiration date required</div>
            </div>

            <div className="col-md-3">
              <label form="cc-cvv" className="form-label">
                CVV
              </label>
              <input
                type="text"
                className="form-control"
                id="cc-cvv"
                placeholder=""
                disabled={isDisabled}
                required
              />
              <div className="invalid-feedback">Security code required</div>
            </div>
          </div>
          <hr className="my-4"></hr>

          <button className="container-sm btn btn-primary btn-lg" type="submit">
            Continue to {isDisabled ? 'Paypal' : 'Payment'}
          </button>
        </div>
      </div>
    </form>
  );
};
