
import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
// import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
import './ShoppingCart.css';
import CheckoutDialog from './CheckoutDialog';

const ShoppingCart = () => {
    const [quantities, setQuantities] = useState({});

  const headerTitle = "";
  const listProdText = "Listing Products";
  const products = [
    { itemcode: 'SPICYKEROPOK150', name: 'Lekor Sweet & Spicy Favor (150g)', images:["spicylekor150.jpg"], price: 10.00 },
    { itemcode: 'SPICYKEROPOK250', name: 'Lekor Sweet & Spicy Favor (250g)', images:["spicylekor150.jpg"], price: 15.00 },
    { itemcode: 'ORIGINALKEROPOK150', name: 'Lekor Original Favor (150g)', images:["originallekor150.jpg"], price: 10.00 },
    { itemcode: 'ORIGINALKEROPOK250', name: 'Lekor Original Favor (250g)', images:["originallekor150.jpg"], price: 15.00 },
    { itemcode: 'ABALONE001', name: 'Canned Abalone (425g)', images:["cannedabalone.jpg"], price: 15.00 },
    { itemcode: 'BRAISEDABALONE', name: 'Braised Abalone (425g)', images:["braisedabalone.jpg"], price: 15.00 },
    { itemcode: 'CRABSTICK150', name: 'Crabstick Snack (150g)', images:["no_image.jpg"], price: 10.00 },
  ];
  const [totalQuantity, setTotalQuantity] = useState(0);
  const basketPreviewText = (
    <>
      <strong className="p-0 m-0" style={{ color: '#11c4e0', fontSize: '20px' }}>
        {totalQuantity}
      </strong>{'         '}
      items in your basket.
    </>
  );

  useEffect(() => {
    const totalQty = Object.values(quantities).reduce((acc, qty) => acc + qty, 0);
    setTotalQuantity(totalQty);
  }, [quantities]);

  const handleAddToCart = (productName) => {
    const updatedQuantities = { ...quantities, [productName]: (quantities[productName] || 0) + 1 };
    setQuantities(updatedQuantities);
  };

  const handleRemoveFromCart = (productName) => {
    const updatedQuantities = { ...quantities, [productName]: Math.max((quantities[productName] || 0) - 1, 0) };
    setQuantities(updatedQuantities);
  };

  const [showDialog, setShowDialog] = useState(false);
  const handleConfirmPayment = (totalAmout) => {
    console.log('totalAmout:', totalAmout);

    setShowDialog(false);
  };

  return (
    <div class="container">
            <CheckoutDialog
                show={showDialog}
                onHide={() => setShowDialog(false)}
                products={products}
                quantities={quantities}
                onConfirmPayment={handleConfirmPayment}
            />
      <div className="basket-icon">
        <button className="p-0 border-0" onClick={() => setShowDialog(true)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="40" viewBox="0 0 16 16"><path fill="white" d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0z"/></svg>        
        </button>
      </div>
      <div className="basket-icon2">
        <button className="p-0 border-0 btn btn-outline-alert">
        <span className="badge badge-alert">{totalQuantity}</span>
        </button>
      </div>
        <h1 className="m-5 text-center">{headerTitle}</h1>
        <h6><span class="titleFocus">1. </span>Items *</h6>
        <div class="card m-3">
            <div class="card-body">
                <span>{basketPreviewText}</span> 
            </div>
        </div>
        <div class="card m-3">
            <div class="card-body">
                <div class="row">
                    <div class="col-10">
                    {listProdText}
                    </div>
                    <div class="col-2 d-flex justify-content-end">
                        <button class="p-0 mr-1 border-0 btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="gray" d="M40 48c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24zm152 16c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32h288c17.7 0 32-14.3 32-32s-14.3-32-32-32zM16 232v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24m24 136c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"/></svg>
                        </button>
                        <button class="p-0 mr-1 border-0 btn" style={{ borderBottom: '1px #11c4e0 solid' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024"><path fill="gray" d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H212V212h200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H612V212h200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16m-52 268H212V612h200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16m-52 268H612V612h200z"/></svg> 
                        </button>
                   </div>
                </div>
            </div>
        </div>

        <div class="row mx-3" style={{ maxHeight: '1000px', overflowY: 'auto' }}>
        {products.map((product) => (
          <div className="col-4 p-2" key={product.itemcode}>
            <img
              src={product.images.length > 0 ? process.env.PUBLIC_URL + `/images/${product.images[0]}` : process.env.PUBLIC_URL + '/no_image.jpg'}
              className="card-img-top"
              alt="Product"
            />            
            <div className="productFrame">
                <h6>{product.name}</h6>
                <p>Price: <span style={{ color: '#11c4e0', fontSize: '18px' }}><strong>${product.price}</strong></span></p>
              <div className="w-1/2 d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-circle"
                  onClick={() => handleAddToCart(product.itemcode)}
                  style={{ width:'45px',height:'40px'}} 
                >
                  <p><strong>+</strong></p>
                </button>
                <div className="mx-1">
                    <input type="text" className="form-control text-center" style={{ width:'70px',height:'40px'}} placeholder="0" readOnly value={quantities[product.itemcode] || 0} />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-circle"
                  onClick={() => handleRemoveFromCart(product.itemcode)}
                  style={{ width:'45px',height:'40px'}} 
                >
                  <p><strong>-</strong></p>
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <Form>
        <h6 class="mt-5"><span class="titleFocus">2. </span>Full Name *</h6>
        <div class="m-3 mb-5">
            <input type="text" class="form-control p-3" placeholder="Xinfiesta Pte Ltd"/>
        </div>
        <h6><span class="titleFocus">3. </span>Phone Number *</h6>
        <div class="m-3 mb-5">
            <input type="number" class="form-control p-3" placeholder="+65 8896 5234"/>
        </div>
        <h6><span class="titleFocus">4. </span>Email Address *</h6>
        <div class="m-3 mb-5">
            <input type="email" class="form-control p-3" placeholder="sales@xinfiesta.com"/>
        </div>
        <h6><span class="titleFocus">5. </span>Delivery Address *</h6>
        <div class="row m-3 mb-5">
            <input type="text" class="form-control p-3" placeholder="Delivery Address"/>
            <input type="number" class="form-control p-3 mt-1" placeholder="Postal Code"/>
        </div>
        </Form>
        <div class="m-3 mb-5 d-flex justify-content-end">
            <button type="button" class="btn btn-primary p-3" onClick={() => setShowDialog(true)}>Proceed to Payment</button>
        </div>
        <br/><br/>
    </div>
  );
};

export default ShoppingCart;
