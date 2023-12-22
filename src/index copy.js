import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import ShoppingCart from './ShoppingCart';
//import reportWebVitals from './reportWebVitals';

const stripePromise = loadStripe('pk_test_51ON9cZGCuECbNPMDBwWdEK3suHUKmJk9ipP8UIRADa8KUtYG45CAqCLQ5lrfR3Y682Q4NB9QjvaYGxb4DEGQqkSL007QB6gVer'); // Replace with your actual publishable key
const options = {
  clientSecret: 'sk_test_51ON9cZGCuECbNPMDmYxS6BQQ2n6diYpSF7We5hEaJE5fkn8qjxG0hBzDkD0PmGf2qLyDvMyweoReElMWFbgxxuO300RXNpWfIr',
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise} options={options}>
      <ShoppingCart />
    </Elements>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
