import React from "react";
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";

const AppointmetBanner = ({selectedDate,setSelectedData}) => {
  
  return (
    <header className="my-20">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between">
          <img
            src={chair}
            className="lg:w-1/2 rounded-lg shadow-2xl"
            alt=""
          />
          <div>
              <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedData}
              />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmetBanner;
