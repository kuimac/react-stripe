import React from 'react';
import './App.css';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <StripeProvider apiKey="pk_test_51L4HMKA3AbvkM4bVk37yyKC0YorbYsbwckK6ZQaDKpwheRqJUJEtzDbXSnvOfux2wghSYkrnwvTj6jhAJU8t9Y5R00wrtxzT3J">
        <Elements>
            <CheckoutForm />
        </Elements>
      </StripeProvider>
    </div>
  );
}

export default App;