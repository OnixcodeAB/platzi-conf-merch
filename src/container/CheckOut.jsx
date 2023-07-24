import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ApiContext } from '../context/ApiContext';
import { useForm } from 'react-hook-form';
import { fetchStates, getStateByCountryID } from '../utils/api';

export const CheckOut = () => {
  const {
    initialState: {
      state: { cart },
      currency,
      sym,
      addBuyerInfo,
    },
    Calc: { subTotal, IVA, total, cartItem, totalWithDesc, applyDiscount },
  } = useContext(AppContext);

  const { countries } = useContext(ApiContext);
  const [countryName, setCountryName] = useState('');
  const [states, setStates] = useState([]);
  const [discountCode, setDiscountCode] = useState('');
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  /* Functions and variable*/
  const onSubmit = (data) => {
    addBuyerInfo(data);
    navigate('/checkout/payment');
  };

  /* Fecth Data (Country States) */
  const getStateByCountryID = (countries, countryName) => {
    const countryID = countries.data?.find(
      (item) => item.name.common === countryName
    )?.cca2;
    if (countryID) {
      fetchStates(countryID).then((result) => {
        setStates(result);
      });
    }
  };
  const onchange = (e) => {
    e.preventDefault(), setDiscountCode(e.target.value);
    console.log(discountCode);
  };

  const handleClick = () => {
    applyDiscount(discountCode);
  };

  /* update states when country change */
  useEffect(() => {
    getStateByCountryID(countries, countryName);
  }, [countryName]);

  /* End Fetch Data */

  /* Functions End */

  return (
    <div className="container py-5 ">
      <div className="container-fluid row g-5 m-0">
        <div className="col-md-5 col-lg-4 order-md-last">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{cartItem}</span>
          </h4>
          <ul className="list-group mb-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="list-group-item d-flex justify-content-between lh-sm"
              >
                <div>
                  <h6 className="my-0">{item.title}</h6>
                  <small className="text-muted">{item.description}</small>
                </div>
                <span className="text-muted">
                  {sym ? sym : '$'}
                  {item.price}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between bg-light">
              <div className="text-success">
                <h6 className="my-0">Promo code</h6>
                <small>EXAMPLECODE</small>
              </div>
              <span className="text-success">−{sym ? sym : '$'}5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal </span>
              <strong>
                {sym ? sym : '$'}
                {subTotal}
              </strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>IVA (%18) </span>
              <strong>
                {sym ? sym : '$'}
                {IVA}
              </strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total ({currency})</span>
              <strong>
                <span
                  className={`${
                    totalWithDesc
                      ? 'text-danger text-decoration-line-through pe-2'
                      : ''
                  }`}
                >
                  {sym ? sym : '$'}
                  {total}
                </span>
                {totalWithDesc ? (
                  <span>
                    {sym ? sym : '$'}
                    {totalWithDesc}
                  </span>
                ) : (
                  ''
                )}
              </strong>
            </li>
          </ul>

          <form className="card p-2">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Promo code"
                value={discountCode}
                onChange={onchange}
              />
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClick}
              >
                Redeem
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Billing address</h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
              <div className="col-sm-6 has-validation">
                <label htmlFor="firstName" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Name"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className="mt-3 text-danger">
                    ⚠ Valid first name is required.
                  </p>
                )}
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  {...register('lastName', { required: true })}
                />
                {errors.lastName && (
                  <p className="mt-3 text-danger">
                    ⚠ Valid Last name is required.
                  </p>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label">
                  Email <span className="text-muted"></span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  {...register('email', { required: true })}
                />
                {errors.email && (
                  <p className="mt-4 text-danger">
                    ⚠ Please enter a valid email address for shipping updates.
                  </p>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="1234 Main St"
                  {...register('address', { required: true })}
                />
                {errors.address && (
                  <p className="mt-4 text-danger">
                    Please enter your shipping address.
                  </p>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="address2" className="form-label">
                  Address 2 <span className="text-muted">(Optional)</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address2"
                  placeholder="Apartment or suite"
                />
              </div>

              <div className="col-md-5">
                <label htmlFor="country" className="form-label">
                  Country
                </label>
                <select
                  className="form-select"
                  id="country"
                  {...register('country', { required: true })}
                  onChange={(e) => setCountryName(e.target.value)}
                >
                  <option value="">Choose...</option>
                  {countries.data?.map((options, idx) => (
                    <option value={options.name.common} key={idx}>
                      {options.name.common}
                    </option>
                  ))}
                </select>
                {errors.country && (
                  <p className="mt-4 text-danger">
                    ⚠ Please provide a valid country.
                  </p>
                )}
              </div>

              <div className="col-md-4">
                <label htmlFor="state" className="form-label">
                  State
                </label>
                <select
                  className="form-select"
                  id="state"
                  {...register('state', { required: true })}
                >
                  <option value="">Choose...</option>
                  {states?.map((state, idx) => (
                    <option value={state.name} key={idx}>
                      {state.name}
                    </option>
                  ))}
                </select>
                {errors.state && (
                  <p className="mt-4 text-danger">
                    ⚠ Please provide a valid state.
                  </p>
                )}
              </div>

              <div className="col-md-3">
                <label htmlFor="zip" className="form-label">
                  Zip
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="zip"
                  placeholder=""
                  {...register('zipCode', { required: true })}
                />
                {errors.zipCode && (
                  <p className="mt-4 text-danger">⚠ Zip Code Required.</p>
                )}
              </div>
            </div>

            <hr className="my-4"></hr>

            <button type="submit" className="w-100 btn btn-primary btn-lg">
              Continue to Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
