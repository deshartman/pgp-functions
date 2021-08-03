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
      "amount": "99.99", 
      "currency_code": "USD", 
      "postal_code": null
    }
   */
  console.log(`Got charge request to Mock PGP: ${event}`);

  // Respond with a dummy card transactions and no errors
  let payment_response = {
    "charge_id": "a9dc6297cd1a4fb095e61b1a9cf2dd1d",
    "error_code": null,
    "error_message": null
  };

  console.log(`Mock Payment for ${event.amount} made`);

  callback(null, payment_response);
};
