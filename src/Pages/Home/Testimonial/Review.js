import React from "react";

const Review = ({ reviewItem }) => {
  const { name, location, review, img } = reviewItem;

  return (
    <div className="card lg:w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{review}</p>
        <div className="card-actions justify-start items-center">
          <div className="avatar m-4">
            <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} />
            </div>
          </div>
          <div> 
              <h5 className="text-lg">{name}</h5>
              <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
