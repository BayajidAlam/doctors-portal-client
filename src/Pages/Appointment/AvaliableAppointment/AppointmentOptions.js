import React from "react";

const AppointmentOptions = ({ option, setTreatment }) => {
  const { name, price, slots } = option;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2 className="text-primary text-2xl font-bold">{name}</h2>
        <p>{slots.length > 0? slots[0]: 'No Abaliabvale Slots'}</p>
        <p>{slots.length} {slots.length > 1 ?'spaces':'space'} avaliable</p>
        <p><small>Price: ${price}</small></p>
        <div 
        className="card-actions justify-center">
        <label
              disabled={slots.length === 0}
              onClick={()=>setTreatment(option)}
              htmlFor="booking-modal" 
              className="btn h-14 bg-gradient-to-r from-primary to-secondary text-white">Book Appointment</label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOptions;
