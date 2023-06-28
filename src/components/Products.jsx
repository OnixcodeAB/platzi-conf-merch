import React from 'react';
import '../style/Products.css';

export const Products = ({ products }) => {
  return (
    <div className="container-fluid products  ">
      <div className='row gap-3 row-cols-3 justify-content-center'>
        {products.map((p, idx) => (
          <div
            className="card my-md-2 px-2 col-md-3 "
            style={{ width: '18rem' }}
            key={idx}
          >
            <img
              className="card-img-top mt-2"
              src={p.image}
              alt="Card image cap"
            />
            <div className="card-body text-center">
              <div className="d-md-flex justify-content-evenly">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-title">${p.price}.00</p>
              </div>
              <p className="card-text">{p.description}</p>
              <a href="#" className="btn btn-primary">
                Add Cart
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
