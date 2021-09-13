exports.handler = function (context, event, callback) {
    console.log("Capture CVC");
    const restClient = context.getTwilioClient();
    

        try {
            const payment = await restClient.calls(event.activeCallSID)
                .payments
                .create({
                    idempotencyKey: Date.now(),
                    statusCallback: statusCallback,
                });
            console.log(`Generated a Payment SID: ${payment.sid}`);
            // Return a PKXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX with all the detail for the next call
            res.send(payment.sid);
        } catch (error) {
            try {
                console.log(`second try`);
                console.log(`ERROR: ${error}`);
                //res.status(status).send(body);
            } catch (node_error) {
                console.log(`second catch: Node promise Error ${node_error}`);
            }

        }
  



    callback(null, ??);
};