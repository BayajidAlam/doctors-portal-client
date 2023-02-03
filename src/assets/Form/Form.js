import React from "react";
import img from "../../assets/images/appointment.png";

const Form = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${img})`,
      }}
      className="my-20 rounded-md"
    >
      <div className="text-center py-8">
        <p className="text-xl text-primary">Contact Us</p>
        <h2 className="text-4xl text-white">Stay connected with us</h2>
      </div>
      <form>
        <div className="flex flex-col lg:w-1/2 mx-auto gap-8 lg:p-6">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-2/3 mx-auto"
          />
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-2/3 mx-auto"
          />
          <textarea
            className="textarea textarea-bordered w-2/3 mx-auto"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="text-center pb-6">
          <button className="btn-primary btn btn-sm">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Form;
