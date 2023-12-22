import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CheckoutDialog = ({ show, onHide, products, quantities, onUpdateQuantities, onConfirmPayment }) => {
  const [editableQuantities, setEditableQuantities] = useState({});

  useEffect(() => {
    setEditableQuantities({ ...quantities });
  }, [quantities]);

  const handleQuantityChange = (itemcode, value) => {
    setEditableQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemcode]: Math.max(0, value),
    }));
  };

  const finalProducts = Object.keys(editableQuantities).map((itemcode) => {
    const quantity = editableQuantities[itemcode];
    const product = products.find((product) => product.itemcode === itemcode);
    
    return {
      name: product ? product.itemcode : '', // Adjust based on your product object structure
      price: product ? product.price : 0,
      quantity: quantity,
    };
  });

  const calculateSubtotal = () => {
    return Object.keys(editableQuantities).reduce((total, itemcode) => {
      const quantity = editableQuantities[itemcode];
      const product = products.find((product) => product.itemcode === itemcode);
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  const calculateTotalPayment = () => {
    const subtotal = calculateSubtotal();

    let deliveryFee = 0;
    if (subtotal < 50) {
      deliveryFee = 5;
    }
  
    return subtotal + deliveryFee;
  };

  const deliveryFee = calculateTotalPayment() < 50 ? 5 : 0;  
  finalProducts.push({
    name: 'DELIVERY',
    price: deliveryFee,
    quantity: 1,
  });

  const handleSubmit = () => {
    onUpdateQuantities(editableQuantities);
    onConfirmPayment(calculateTotalPayment().toFixed(2), finalProducts);
    onHide(); 
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className='px-5 mt-3'>
          {products.map((product) => (
            <div key={product.itemcode} className="d-flex justify-content-between align-items-center mb-3">
                <p>{product.name} - ${product.price.toFixed(2)} </p> 
                <div className="w-1/2 d-flex justify-content-end align-items-center">
                <input
                    type="number"
                    className=""
                    style={{ width: '70px', height: '30px', fontSize: '12px',    borderRadius: '10px' ,border: '1px solid #ced4da',textAlign: 'center'}}
                    placeholder="0"
                    value={editableQuantities[product.itemcode] || 0}
                    onChange={(e) => handleQuantityChange(product.itemcode, Math.max(0, parseInt(e.target.value, 10)))}
                    />
                </div>
            </div>
          ))}
          <hr class='mt-4'/>
            <div className="row">
                <div className="col-6 text-start">
                    <p>Sub-total: </p>
                </div>
                <div className="col-6 text-end px-3">
                    <p>$ <span style={{ fontSize: '15px' }}>{calculateSubtotal().toFixed(2)}</span></p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 text-start">
                    <p>Delivery Charge: </p>
                </div>
                <div className="col-6 text-end px-3">
                    <p>$ <span style={{ fontSize: '14px' }}>{deliveryFee.toFixed(2)}</span></p>
                </div>
            </div>
         <hr/>
            <div className="row">
                <div className="col-6 text-start">
                    <p>Payable Amount: </p>
                </div>
                <div className="col-6 text-end px-3">
                    <p>$ <span style={{ color: '#11c4e0', fontSize: '15px' }}>{calculateTotalPayment().toFixed(2)}</span></p>
                </div>
            </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Confirm Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CheckoutDialog;
