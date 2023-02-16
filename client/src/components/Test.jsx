import React,{useEffect,useState} from 'react';
import {Box} from "@mui/material";
import CheckoutForm from "./CheckoutForm";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../axios";
// import "./App.css";
const Test = () => {
   const stripePromise = loadStripe(`${process.env.STRIPE_PUBLISH_KEY}`);
   const [clientSecret, setClientSecret] = useState("");

   useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      axios.post("/create-payment-intent",{items: [{id: "xl-tshirt"}]}).then((res) => setClientSecret(res.clientSecret))
      // fetch("/create-payment-intent", {
      //    method: "POST",
      //    headers: { "Content-Type": "application/json" },
      //    body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      // })
      //     .then((res) => res.json())
      //     .then((data) => setClientSecret(data.clientSecret));
   }, []);

   const appearance = {
      theme: 'stripe',
   };
   const options = {
      clientSecret,
      appearance,
   };
   return  (
       <Box>
          {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                 <CheckoutForm />
              </Elements>
          )}
       </Box>
   );
};

export default Test;
