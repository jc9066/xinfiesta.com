
import React, { useState } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const ShoppingCart = () => {
  const headerTitle = "Xfiesta Pte Ltd";
  const basketPreviewText = "No product in your basket.";
  const listProdText = "Listing Products";

  return (
    <div class="container my-5 pt-5">
        <h1 className="m-5 text-center">{headerTitle}</h1>
        <h6>1. Items *</h6>
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
                        <button class="p-0 mr-1 border-0 btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 1024 1024"><path fill="gray" d="M464 144H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H212V212h200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16m-52 268H612V212h200zM464 544H160c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16m-52 268H212V612h200zm452-268H560c-8.8 0-16 7.2-16 16v304c0 8.8 7.2 16 16 16h304c8.8 0 16-7.2 16-16V560c0-8.8-7.2-16-16-16m-52 268H612V612h200z"/></svg> 
                        </button>
                   </div>
                </div>
            </div>
        </div>

        <div class="row mx-3 mb-5">
            <div class="col-6 p-2">
                <img class="card" width="100" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijg7yH-fKgbamUODConoko-CwZgorqcQboKcEofpyPIpIQPUNkeQckeYbS9SjsbzXBxs&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-6 p-2">
                <img class="card" width="100" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijg7yH-fKgbamUODConoko-CwZgorqcQboKcEofpyPIpIQPUNkeQckeYbS9SjsbzXBxs&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-6 p-2">
                <img class="card" width="100" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijg7yH-fKgbamUODConoko-CwZgorqcQboKcEofpyPIpIQPUNkeQckeYbS9SjsbzXBxs&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            <div class="col-6 p-2">
                <img class="card" width="100" height="300" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQijg7yH-fKgbamUODConoko-CwZgorqcQboKcEofpyPIpIQPUNkeQckeYbS9SjsbzXBxs&usqp=CAU" class="card-img-top" alt="..."/>
                <div class="card card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>

        <h6>2. Full Name *</h6>
        <div class="m-3 mb-5">
            <input type="text" class="form-control p-3" placeholder="Xinfiesta Pte Ltd"/>
        </div>
        <h6>3. Phone Number *</h6>
        <div class="m-3 mb-5">
            <input type="number" class="form-control p-3" placeholder="+65 8896 5234"/>
        </div>
        <h6>4. Email Address *</h6>
        <div class="m-3 mb-5">
            <input type="email" class="form-control p-3" placeholder="sales@xinfiesta.com"/>
        </div>
        <h6>5. Delivery Address *</h6>
        <div class="row m-3 mb-5">
            <input type="text" class="form-control p-3" placeholder="Delivery Address"/>
            <input type="number" class="form-control p-3 mt-1" placeholder="Postal Code"/>
        </div>
        <div class="m-3 mb-5 d-flex justify-content-end">
            <button type="button" class="btn btn-primary">Pay Now</button>
        </div>
        <br/><br/>
      
    </div>
  );
};

export default ShoppingCart;
