import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import {
  Home,
  Information,
  Payment,
  Success,
  CheckOut,
  Notfound,
} from '../container/container';
import '../style/App.css';
import Layout from '../components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/checkout" Component={CheckOut} />
          <Route exact path="/checkout/information" Component={Information} />
          <Route exact path="/checkout/payment" Component={Payment} />
          <Route exact path="/checkout/success" Component={Success} />
          <Route path="*" Component={Notfound} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
