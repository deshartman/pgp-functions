exports.handler = async function (context, event, callback) {

  /**
   * Twilio will pass in the payment object as part of the event:
   */

  console.log(`Got tokenise request to Mock PGP: ${JSON.stringify(event, null, 4)}`);
  console.dir(event);

  // Respond with a dummy card transactions and no errors
  let token_response = {
    "token_id": "T_a9dc6297cd1a4fb095e61b1a9cf2dd1d",
    "error_code": null,
    "error_message": null
  };

  console.log(`Mock Token for card: ${JSON.stringify(token_response, null, 4)}`);

  callback(null, token_response);
};
