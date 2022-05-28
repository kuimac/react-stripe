import React from 'react';
import './App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <StripeProvider apiKey="">
        <Elements>
            <CheckoutForm />
        </Elements>
      </StripeProvider>
    </div>
  );
}

export default App;