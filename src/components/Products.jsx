import React, { useContext, useReducer } from 'react';
import '../style/Products.css';
import { AppContext } from '../context/AppContext';
import { Product } from '../container/Product';

export const Products = () => {
  const {
    initialState: {
      state: { products },
      addToCart,
    },
  } = useContext(AppContext);

  return (
    <div className="container-fluid products  ">
      <div className="row gap-3 row-cols-3 justify-content-center">
        {products.map((product, idx) => (
          <Product key={idx} item={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};
