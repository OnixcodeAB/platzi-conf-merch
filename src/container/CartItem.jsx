import React from 'react';

const CartItem = ({
  item,
  removeFromCart,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <>
      <hr className="my-4" />
      <div className="row align-items-center">
        <div className="col-sm mb-4 mb-lg-0">
          {/* Image */}
          <div className="image-cc text-center bg-image hover-overlay hover-zoom ripple">
            <img
              src={item.image}
              alt="Blue Jeans Jacket"
              className="rounded-3 img-cart"
            />
            <a href="#">
              <div
                className="mask"
                style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
              ></div>
            </a>
          </div>
          {/* Image */}
        </div>

        <div className="col-sm mb-4 mb-lg-0">
          {/* Data */}
          <p>
            <strong>{item.title}</strong>
          </p>
          <p>Color: blue</p>
          <p>Size: M</p>
          <button
            type="button"
            className="btn btn-primary btn-sm me-2 mb-2"
            onClick={() => removeFromCart(item.id)}
          >
            <i className="bi bi-trash"></i>
          </button>
          <button type="button" className="btn btn-danger btn-sm mb-2">
            <i className="bi bi-heart"></i>
          </button>
          {/* Data */}
        </div>

        <div className="col-sm mb-4 mb-lg-0">
          {/* Quantity */}
          <div className="d-flex mb-4">
            <button
              type="button"
              className="btn btn-primary px-3 me-2"
              onClick={() => handleDecrement(item)}
            >
              <i className="bi bi-dash"></i>
            </button>

            <div className="form-floating ">
              <input
                type="number"
                id="form1"
                min="0"
                name="quantity"
                value={item.quantity}
                className="form-control text-center"
                onChange={(e) => e}
              />
              <label htmlFor="fomr1" className="form-label">
                Quantity
              </label>
            </div>

            <button
              className="btn btn-primary px-3 ms-2"
              onClick={() => {
                handleIncrement(item);
              }}
            >
              <i className="bi bi-plus"></i>
            </button>
          </div>
          {/* Quantity */}
          {/* Price */}
          <p className="text-start text-md-center">
            <strong>${item.price}.00</strong>
          </p>
          {/* Price */}
        </div>
      </div>
    </>
  );
};

export default CartItem;
