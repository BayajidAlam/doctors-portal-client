import React from "react";
import img from '../../../assets/images/appointment.png';
import doc from '../../../assets/images/doctor.png';
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section
    className="my-40"
    style={{
      background: `url(${img})`
    }}
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doc}
            className="lg:w-1/2 rounded-lg hidden lg:block -mt-36 -mb-4"
            alt="/"
          />
          <div>
            <h1 className="text-lg text-primary font-bold">Appointment</h1>
            <h2 className="text-4xl text-white">Make an appointment Today</h2>
            <p className="py-6 w-3/4 text-white">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
           <PrimaryButton>Getting Started</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
