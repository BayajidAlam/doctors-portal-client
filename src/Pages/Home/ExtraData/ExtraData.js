import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ExtraData = () => {
  return (
    <div className="card lg:card-side bg-base-100  my-20">
      <figure className="lg:w-1/2">
        <img src={treatment} className="lg:w-1/2 rounded-md" alt="Movie" />
      </figure>
      <div className="card-body lg:w-1/2">
        <h2 className="card-title text-5xl font-bold mb-4">
          Exceptional Dental
          <br />
          Care, on Your Terms
        </h2>
        <p className="mb-0 w-3/4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div className="flex justify-start mt-0">
        <PrimaryButton>Book an appointment</PrimaryButton>
        </div>
      </div>
      
    </div>
  );
};

export default ExtraData;
