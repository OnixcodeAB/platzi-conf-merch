import React, { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Home,
  Information,
  Payment,
  Success,
  CheckOut,
  Notfound,
  Cart,
} from '../container/container';
import '../style/App.css';
import Layout from '../components/Layout';
import { ApiProvider } from '../context/ApiContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { AppProvider } from '../context/AppContext';

const initialOptions = {
  clientId:
    'AVT46M5FWPT3hNDnk19REDSAvYP8QMz70VeIkpeAPpHNZVbd213Xf2dhZ6gcqTpBr6PIczk-tajqR-kN',
  currency: 'USD',
  intent: 'capture',
};
const App = () => {
  return (
    <AppProvider>
      <ApiProvider>
        <PayPalScriptProvider
          options={{
            clientId:
              'AVT46M5FWPT3hNDnk19REDSAvYP8QMz70VeIkpeAPpHNZVbd213Xf2dhZ6gcqTpBr6PIczk-tajqR-kN',
          }}
        >
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/cart" Component={Cart} />
                <Route exact path="/checkout" Component={CheckOut} />
                <Route
                  exact
                  path="/checkout/information"
                  Component={Information}
                />
                <Route exact path="/checkout/payment" Component={Payment} />
                <Route exact path="/checkout/success" Component={Success} />
                <Route path="*" Component={Notfound} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </PayPalScriptProvider>
      </ApiProvider>
    </AppProvider>
  );
};

export default App;
