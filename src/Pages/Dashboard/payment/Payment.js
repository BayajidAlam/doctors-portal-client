import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const {treatment, price, appointmentDate} = useLoaderData();
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="card w-1/2 h-[600px] bg-blue-100 shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl text-blue-400 font-bold font text-center">Payment</h2>
            <h1 className="text-xl">Payment for <span className="font-semibold">{treatment}</span></h1>
            <p className="text-xl">Your slot -<span className="font-semibold">{appointmentDate}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
