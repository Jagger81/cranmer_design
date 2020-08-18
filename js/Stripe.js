var stripe = Stripe('pk_test_PufGCpNIoPD0bVSiXh7iPbtA');

stripe.redirectToCheckout({
  lineItems: [{
    price: '{{PRICE_ID}}', // Replace with the ID of your price
    quantity: 1,
  }],
  mode: 'payment',
  successUrl: 'https://example.com/success',
  cancelUrl: 'https://example.com/cancel',
}).then(function (result) {
  // If `redirectToCheckout` fails due to a browser or network
  // error, display the localized error message to your customer
  // using `result.error.message`.
});