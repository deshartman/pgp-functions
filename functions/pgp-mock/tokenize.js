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
      "amount": "0", 
      "currency_code": "USD", 
      "postal_code": null
    }
   */

  console.log(`Got tokenise request to Mock PGP: ${JSON.stringify(event, null, 4)}`);

  // Respond with a dummy card transactions and no errors
  let token_response = {
    "charge_id": "T_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
    "error_code": null,
    "error_message": null
  };

  console.log(`Mock Token for card: ${JSON.stringify(token_response, null, 4)}`);

  callback(null, token_response);
};
