import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const updatedProduct = { ...payload, quantity: 1 };
    setState({
      ...state,
      cart: [...state.cart, updatedProduct],
    });
    //console.log(payload);
  };

  const removeFromCart = (payload) => {
    console.log(payload);
    const index = state.cart.findIndex((product) => product.id === payload);
    if (index !== -1) {
      const newProduct = [...state.cart];
      newProduct.splice(index, 1);
      return setState({
        ...state,
        cart: newProduct,
      });
    }
  };

  const handleIncrement = (payload) => {
    const findProduct =
      state.products.find((item) => item.id === payload.id) ||
      'Product Not Found';

    const oldPrice = findProduct.price;

    const updatedQyt = state.cart?.map((product) => {
      if (product.id === payload.id) {
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    const cartItem = updatedQyt.map((p, idx) => {
      if (updatedQyt[idx].id === payload.id) {
        return { ...p, price: oldPrice * p.quantity };
      }
      return p;
    });

    setState({
      ...state,
      cart: cartItem,
    });
    //callback(payload, updatedCart);
    //console.log(cartItem);
  };

  const handleDecrement = (payload) => {
    const findProduct =
      state.products.find((item) => item.id === payload.id) ||
      'Product Not Found';

    const oldPrice = findProduct.price;

    const updatedQyt = state.cart?.map((product) => {
      if (product.id === payload.id) {
        return { ...product, quantity: product.quantity - 1 };
      }
      return product;
    });

    const cartItem = updatedQyt.map((p, idx) => {
      if (updatedQyt[idx].id === payload.id) {
        return { ...p, price: oldPrice * p.quantity };
      }
      return p;
    });

    setState({
      ...state,
      cart: cartItem,
    });
    //console.log(cartItem);
  };

  return {
    state,
    addToCart,
    removeFromCart,
    handleIncrement,
    handleDecrement,
  };
};

export { useInitialState };
