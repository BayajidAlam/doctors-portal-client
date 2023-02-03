import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, selectedDate, setTreatment }) => {
  const { name, slots } = treatment;
  const date = format(selectedDate, "PP");

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name= form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate: date,
      treatment: name,
      patient: name,
      slot,
      email,
      phone
    }
    setTreatment(null)
  }

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold text-center my-6">{name}</h3>
          <form 
          onSubmit={handleBooking}
          className="grid grid-cols-1 gap-6">
            <input
              type="text"
              value={date}
              disabled
              className="input  w-full input-bordered"
            />
            <select
             name="slot"
             className="select select-bordered w-full">
              {slots.map((slot,i) => (
                <option 
                selected
                key={i}
                >{slot}</option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="input  w-full input-bordered"
            />
            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              className="input  w-full input-bordered"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input  w-full input-bordered"
            />
            <input
              className="w-full btn btn-accent"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
