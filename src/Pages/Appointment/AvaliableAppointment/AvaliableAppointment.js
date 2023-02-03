import { format } from 'date-fns';
import React from 'react';

const AvaliableAppointment = ({selectedDate}) => {
  return (
    <section>
          <p className='text-center font-bold text-secondary'>Available Appointments on {format(selectedDate,'PP')}</p>
    </section>
  );
};

export default AvaliableAppointment;