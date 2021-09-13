exports.handler = function (context, event, callback) {
    console.log("Get Customer Call SID");
    const restClient = context.getTwilioClient();
    var call_sid = '';

    try {
        console.log(`Finding all in progress calls now`);
        const allCalls = await restClient.calls.list({
            limit: 20,
            status: 'in-progress',
        });

        allCalls.forEach(call => {
            console.log(`callSID: ${call.sid}, from: ${call.from} to: ${call.to}`);
            // Now find the customer side, i.e., non-sip or client side
            const call_from = /^[\d\+\-\(\) ]+$/.test(call.from);
            console.log(`(call.from ) ${call_from}`);
            const call_to = /^[\d\+\-\(\) ]+$/.test(call.to);
            console.log(`(call.to) ${call_to}`);

            if (call_from && call_to) {
                console.log(`PSTN side - Call SID: ${call.sid}`);
                call_sid = call.sid;
            } else {
                console.log(`Agent side`);
                //call_sid = '';
            }
        });
        callback(null, call_sid);
    } catch (error) {
        console.log(error);
        callback(error, null);
    }
};