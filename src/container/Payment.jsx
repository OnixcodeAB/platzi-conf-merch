import React, { useContext, useState } from 'react';
import '../style/Payment.css';
import { PayPalButtons, usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

export const Payment = () => {
  const {
    initialState: {
      state: { cart, buyer },
      addNewOrder,
    },
    Calc: { total, totalWithDesc },
  } = useContext(AppContext);
  const [{ isPending }] = usePayPalScriptReducer();
  const navigate = useNavigate();

  /* Functions to Handle Payments */

  const handlePaymentSucces = async (data) => {
    try {
      const response = await data;
      const detailOrder = await response;
      //console.log(detailOrder.status);

      /* Data validation */
      if (detailOrder.status === 'COMPLETED') {
        const newOrder = {
          buyer,
          product: cart,
          payment: detailOrder,
        };
        /* Passing the data to the context */
        addNewOrder(newOrder);
        navigate('/checkout/success');
      }
    } catch (error) {
      console.log(error);
    }
  };

  /* End Function */

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
              />{' '}
            </div>
          </div>
          <hr className="my-4"></hr>
          {isPending ? (
            <div className="row justify-content-center align-items-baseline text-center pb-3">
              <div className="spinner-border  text-secondary " role="status" />
            </div>
          ) : null}
          <PayPalButtons
            createOrder={(data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: `${
                        (totalWithDesc ? totalWithDesc : total) || 10
                      }`,
                    },
                  },
                ],
              });
            }}
            onApprove={(data, actions) => {
              handlePaymentSucces(
                actions.order.capture().then((value) => value)
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
