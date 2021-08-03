exports.handler = function (context, event, callback) {
    console.log("in tokenize");

    let response = new Twilio.twiml.VoiceResponse();
    response.say('Calling Twilio Tokenise now');

    const tokenise = response.pay({
        paymentConnector: 'PGP_MOCK',
        chargeAmount: '',
        postalCode: false,
        //securityCode: false,
        action: '/pay/result',
    });

    const promptCVC = tokenise.prompt({
        for: 'security-code',
        cardType: 'amex'
    });
    promptCVC.say('Please enter the four digits on the front of your card.');


    callback(null, response);

};