import React from "react";
import "./commerceApi.css";
import Image from "../../assets/inControl2.png";

let captionsJSX = [
  <>
    Validate users with SMS, voice, WhatsApp, and time-based one-time passwords.
    We use two API endpoints to seamlessly check that a user is the owner of the
    phone number they provide.
    <div>
      <br />
      <h3 className="font-bold">The start API endpoint</h3>
      <p>
        When the user is validating their phone number, Verify sends the user a
        4 -10 digit verification code via SMS, WhatsApp, or voice, and waits for
        their response.
      </p>
    </div>
    <br />
    <div>
      <h3 className="font-bold">The check API endpoint</h3>
      <p>
        Verify checks the user’s input matches the code. If they match, we
        register the phone number as approved.
      </p>
    </div>
  </>,

  <>
    ID Verification Pavelon enables real-time automated ID verification,
    safeguarding customer data and ensuring compliance.
  </>,
  <>
    An innovative way to get the customer’s approval. Verify user’s consent in
    real-time with consent verification. Authenticate customers with just a live
    selfie with the user holding their ID Card. Fraud and Identity theft are
    rising and simple ‘I agree’ checkboxes are not enough to take the user’s
    consent. They don’t provide any adequate evidence on who checked that box.
    Integrate Pavelon state-of-the-art Consent Verification Service to take the
    digital consent of your customers before proceeding.
    <br />
    With anti-spoofing measures and advanced AI technology, Pavelon verifies and
    authenticates the user’s identity and consent note in real-time.
  </>,

  <>
    Verify and validate addresses with local and global databases to stay ahead
    of fraudsters. The Address Verification Services allows you to verify a
    Ghana GPS digital address. Bolster identity verification with Proof of
    Address Capture Know that people are who they say they are — and where they
    live — by adding Pavelon's Proof of Address Capture to your business'
    real-time identity verification flow. Verify honest customers in seconds.
  </>,
];

function LeadInText({ JSXArray }) {
  return JSXArray;
}

let foo = {
  name: "fooo",
  age: 2000,
};

function sooMee() {
  const hello = {
    ...foo,
  };

  for (let prop in hello) {
    console.log(prop);
  }
  return hello;
}

function KYC() {
  let soo = {
    ...foo,
  };

  return (
    <div className="bg-gray-100">
      <p>In Development, check back soon</p>
    </div>
  );
}

foo.type = "A+";

export default KYC;
