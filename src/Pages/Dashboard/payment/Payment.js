import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckOut from "./CheckOut";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking =  useLoaderData()
  const { treatment, price, appointmentDate } = booking;

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-1/2 h-[300px] bg-blue-100 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl text-blue-400 font-bold font text-center">
              Payment
            </h2>
            <h1 className="text-xl">
              Payment for <span className="font-semibold">{treatment}</span>
            </h1>
            <p className="text-xl">
              Your slot -
              <span className="font-semibold">{appointmentDate}</span>
            </p>
            <div className="w-2/3 bg-base-100  h-32 p-1 shadow-xl rounded-lg mx-auto">
              <Elements stripe={stripePromise}>
                <CheckOut
                  booking={booking}
                />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
