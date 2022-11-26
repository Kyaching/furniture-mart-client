import React from "react";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {useLoaderData, useParams} from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
const Payment = () => {
  const order = useLoaderData();
  const {data} = order;
  return (
    <div>
      <h2>Please Pay Here</h2>
      <Elements stripe={stripePromise}>
        <CheckoutForm order={data} />
      </Elements>
    </div>
  );
};

export default Payment;
