exports.handler = async function (context, event, callback) {

  /**
   * Twilio will pass in the payment object as part of the event:
   *
    event { 
      "transaction_id": "81e3c0b7-7680-4d3c-b22b-f3974925c4d1", 
      "cardnumber": "4444333322221111", 
      "cvv": "123", 
      "expiry_month": "12", 
      "expiry_year": "25", 
      "description": null, 
      "amount": "50", 
      "currency_code": "USD", 
      "postal_code": null
    }
   */
  console.log(`Got tokenise request to Stripe PGP: ${event}`);

  // Set up payment gateway API call to use this information
  // The TWilio Customer will complete this information as part of the PG setup
  const stripe = require('stripe')(process.env.STRIPE_API_KEY);

  console.log('Stripe Tokenise call');

  const token = await stripe.tokens.create({
    card: {
      number: event.cardnumber,
      exp_month: event.expiry_month,
      exp_year: event.expiry_year,
      cvc: event.cvv,
    },
  });

  console.log(`Completed Stripe Tokenise call`);
  callback(null, token);
};
