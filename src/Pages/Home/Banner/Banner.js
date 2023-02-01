import React from "react";
import img from '../../../assets/images/chair.png'
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={img}
          className="rounded-lg shadow-2xl lg:w-1/2"
          alt=""
        />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts
          <br />
          Here</h1>
          <p className="py-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
          </p>
          <PrimaryButton>Book Now</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Banner;
