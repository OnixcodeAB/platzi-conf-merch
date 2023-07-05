import React from 'react';

export const Product = ({ item, addToCart }) => {
  return (
    <div className="card my-md-2 px-2 col-md-3 " style={{ width: '18rem' }}>
      <img
        className="card-img-top mt-2"
        src={item.image}
        alt="Card image cap"
      />
      <div className="card-body text-center">
        <div className="d-md-flex justify-content-evenly">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-title">${item.price}.00</p>
        </div>
        <p className="card-text">{item.description}</p>
        <button
          type="button"
          href="#"
          className="btn btn-primary"
          onClick={() => addToCart(item)}
        >
          Add Cart
        </button>
      </div>
    </div>
  );
};
