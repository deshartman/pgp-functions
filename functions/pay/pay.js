exports.handler = function (context, event, callback) {
    console.log("in Pay");

    let response = new Twilio.twiml.VoiceResponse();

    response.say('Thank you. Please have your credit card ready.');

    const pay = response.pay({
        paymentConnector: 'PGP_MOCK',
        tokenType: 'reusable',
        chargeAmount: '0',
        postalCode: false,
        //securityCode: false,
        action: '/pay/result',
        language: 'en-AU'
    });

    const promptCVC = pay.prompt({
        for: 'security-code',
        cardType: 'amex'
    });
    promptCVC.say('Please enter the four digits on the front of your card.');

    callback(null, response);

};