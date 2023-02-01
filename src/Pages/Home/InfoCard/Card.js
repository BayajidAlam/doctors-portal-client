import React from "react";

const Card = ({data}) => {
  const {icon,name,description,bgClass} = data;
  return (
    <div className={`card md:card-side shadow-xl ${bgClass} text-white p-6`}>
      <figure>
        <img
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
