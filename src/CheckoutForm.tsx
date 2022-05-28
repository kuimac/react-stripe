import React from 'react';
import {CardElement, injectStripe} from 'react-stripe-elements';

const CheckoutForm = (props: any) => {
  async function handleSubmit(e: any) {
      let {token} = await props.stripe.createToken({name: "Name"});

      let response = await fetch("http://localhost:9000/charge", {
        method: "POST",
        headers: {"Content-Type": "text/plain"},
        body: token.id
    })
    if (response.ok) {
      console.log('ok')
    }
  }
  return (
    <div>
      checkout
      <CardElement />
      <button onClick={handleSubmit}>チェックアウト</button>
    </div>
  )
}

export default injectStripe(CheckoutForm);