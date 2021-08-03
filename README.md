# PGP Functions

## Project setup

1. Clone this project locally into your Twilio Serverless environment.
2. Install all the require packages:

```
npm install
```

3. Copy the `.env.copy` to `.env` andd update the parameters as required, specifically your Account SID
4. Deploy the code to TWilio functions

```
twilio serverless:deploy
```

## Configure Twilio Pay Gateway

Ensure you have the GenericHTTP Connector installed
Configure or add another instance
Configure your Twilio Pay gateway Unique name to "PGP_MOCK"
The username and password are not used, but need to be present.
Change the Endpoint URL to point to your deployed function

```
https://pgp-functions-xxxx-dev.twil.io/pgp-mock
```

## Configure your Twilio number

1. Configure one of your Twilio numbers to point to the deployed function for the IVR pay

```
/pay/tokenize
```

## Tests

Call the number and you should hear a voice instructing you to enter the following mock data:

Card number: 4444 3333 2222 1111
Exp Date: 12 25
Security: 123

PAyment should succeed and the logs are available in Twilio functions to see the output of PGP.
