import React, { useState } from 'react';
import initialState from '../initialState';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const useInitialState = () => {
  const [state, setState] = useLocalStorage('PlatziMerch',initialState);
  const [currency, setCurrency] = useState('USD');
  const [sym, setSym] = useState('');
  
  const addToCart = (payload) => {
    const updatedProduct = { ...payload, quantity: 1 };
    setState({
      ...state,
      cart: [...state.cart, updatedProduct],
    });
    //console.log(payload);
  };

  const addBuyerInfo = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
    // useNavigate('/checkout/payment');
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
    const productIndex = state.products.findIndex(
      (item) => item.id === payload.id
    );
    const findProduct = state.products[productIndex] || 'Product Not Found';

    const oldPrice = findProduct.price;

    const updatedCart = [...state.cart];

    updatedCart.forEach((product, index) => {
      if (product.id === payload.id) {
        product.quantity += 1;
        product.price = oldPrice * product.quantity;
      }
    });
    setState({
      ...state,
      cart: updatedCart,
    });
  };

  const handleDecrement = (payload) => {
    const productIndex = state.products.findIndex(
      (item) => item.id === payload.id
    );
    const findProduct = state.products[productIndex] || 'Product Not Found';

    const oldPrice = findProduct.price;

    const updatedCart = [...state.cart];

    updatedCart.forEach((product, index) => {
      if (product.id === payload.id) {
        product.quantity -= 1;
        product.price = oldPrice * product.quantity;
      }
    });

    setState({
      ...state,
      cart: updatedCart,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      order: [...state.order, payload],
    });
  };

  const getCurrency = (payload, sym) => {
    setCurrency(payload);
    setSym(sym);
  };

  return {
    state,
    currency,
    sym,
    addToCart,
    addBuyerInfo,
    removeFromCart,
    handleIncrement,
    handleDecrement,
    addNewOrder,
    getCurrency,
  };
};

export { useInitialState };
