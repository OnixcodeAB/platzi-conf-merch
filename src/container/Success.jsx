import React from 'react';

export const Success = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="container mb-5 mt-3">
          <div className="row d-flex align-item-baseline">
            <div className="col-xl-9">
              <p>
                {' '}
                Invoice {'>>'} <strong>ID: #123-123</strong>
              </p>
            </div>
            <div className="col-xl-3 float-end">
              <a
                href="#"
                className="btn btn-outline-ligth text-capitalize border-0 "
                role="button"
                color="dark"
              >
                <i
                  className="bi bi-printer text-primary"
                  fill="currentColor"
                ></i>{' '}
                Print
              </a>
              <a
                href="#"
                className="btn btn-ligth text-capitalize border-0"
                color="dark"
              >
                <i className="bi bi-filetype-pdf text-danger"></i>
                Export
              </a>
            </div>
            <hr />
          </div>

          <div className="container">
            <div className="col-md-12">
              <div className="text-center">
                <i
                  className="bi bi-shop text-success"
                  style={{ fontSize: '2.5rem' }}
                ></i>
                <p className="pt-0" style={{ fontSize: '1.5rem' }}>
                  Platzi Merch
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xl-8">
              <ul className="list-unstyled">
                <li className="text-muted">
                  To: <span color="#5d9fc5">John Lorem</span>
                </li>
                <li className="text-muted">Street, City</li>
                <li className="text-muted">State, Country</li>
                <li className="text-muted">
                  <i className="bi bi-telephone-fill"></i> 123-456-789
                </li>
              </ul>
            </div>

            <div className="col-xl-4">
              <p-text-muted>Invoice</p-text-muted>
              <ul className="list-unstyled">
                <li className="text-muted">
                  <i
                    className="bi bi-circle-fill text-primary"
                    color="#84B0CA"
                  ></i>{' '}
                  <span className="fw-bold">ID:</span>#123-456{' '}
                </li>
                <li className="text-muted">
                  <i
                    className="bi bi-circle-fill text-primary"
                    color="#84B0CA"
                  ></i>{' '}
                  <span className="fw-bold">Creation Date:</span>Juan 23,2021{' '}
                </li>
                <li className="text-muted">
                  <i
                    className="bi bi-circle-fill text-primary"
                    color="#84B0CA"
                  ></i>{' '}
                  <span className="fw-bold">Status:</span>Paid{' '}
                </li>
              </ul>
            </div>
          </div>

          {/* Table tha show list of buying products */}

          <div className="row my-2 mx-1 justify-content-center">
            <table className="table table-striped table-borderless">
              <thead
                style={{ backgroundColor: '#84B0CA' }}
                className="text-white"
              >
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Description</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Unit Price</th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Pro Package</td>
                  <td>4</td>
                  <td>$200</td>
                  <td>$800</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Web hosting</td>
                  <td>1</td>
                  <td>$10</td>
                  <td>$10</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Consulting</td>
                  <td>1 year</td>
                  <td>$300</td>
                  <td>$300</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* End Table */}

          {/* Payment total info */}
          <div className="row">
            <div className="col-xl-8">
              <p className="ms-3">
                Add additional notes and payment information
              </p>
            </div>
            <div className="col-xl-3">
              <ul className="list-unstyled">
                <li className="text-muted ms-3">
                  <span className="text-black me-4">SubTotal</span>$1110
                </li>
                <li className="text-muted ms-3 mt-2">
                  <span className="text-black me-4">Tax(15%)</span>$111
                </li>
              </ul>
              <p className="text-black float-start">
                <span className="text-black me-3"> Total Amount</span>
                <span style={{ fontSize: '25px' }}>$1221</span>
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-xl-10">
              <p>Thank you for your purchase</p>
            </div>
            <div className="col-xl-2">
              <button type="button" className="btn btn-primary text-capitalize">
                Pay Now
              </button>
            </div>
          </div>
          {/* End Payment total info */}
        </div>
      </div>
    </div>
  );
};
