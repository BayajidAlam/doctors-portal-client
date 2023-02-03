import React, { useState } from 'react';
import AppointmetBanner from './AppointmentBanner/AppointmetBanner';
import AvaliableAppointment from './AvaliableAppointment/AvaliableAppointment';

const Appointment = () => {
  const [selectedDate, setSelectedData] = useState(new Date())
  return (
    <div>
          <AppointmetBanner
          selectedDate={selectedDate}
          setSelectedData={setSelectedData}
          ></AppointmetBanner>

          <AvaliableAppointment
          selectedDate={selectedDate}
          ></AvaliableAppointment>
    </div>
  );
};

export default Appointment;