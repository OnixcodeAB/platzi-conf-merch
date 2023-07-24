import React, { useState } from 'react';

const useCalc = () => {
  const [cartItem, setCartItem] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [IVA, setIVA] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalWithDesc, setTotalWithDesc] = useState(0);
  const [discount, setDiscount] = useState(0);

  const countItemsInCart = (product) => {
    const result = product.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);

    setCartItem(result);
  };

  const calculateCartTotal = (product) => {
    const sumTotal = product.reduce((acc, item) => {
      return acc + item.price;
    }, 0);
    const totalWithOutIVA = sumTotal + shippingCost;
    const impuesto = sumTotal * (18 / 100);
    const totalAmountWithIVA = totalWithOutIVA + impuesto;
    const formttedNumber = Number(totalAmountWithIVA.toFixed(2));

    setSubTotal(totalWithOutIVA);
    setIVA(impuesto);
    setTotal(formttedNumber);
  };

  const applyDiscount = (code) => {
    const validCodes = ['ABCD', 'EFGH', 'IJKL', 'MNOP', 'QRST'];

    const isValidCode = validCodes.includes(code);

    if (isValidCode) {
      const desc = 20;
      setDiscount(desc);

      const descAply = total * (desc / 100);
      const finalPrice = total - descAply;
      setTotalWithDesc(finalPrice);
    }
  };

  return {
    cartItem,
    IVA,
    subTotal,
    discount,
    total,
    totalWithDesc,
    applyDiscount,
    countItemsInCart,
    calculateCartTotal,
  };
};

export { useCalc };
