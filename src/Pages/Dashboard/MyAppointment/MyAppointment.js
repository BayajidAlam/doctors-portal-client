import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../context/AuthProvider';
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
    const res = await fetch(url,{
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      }
    });
    const data = await res.json()
    return data; 
    }
  })

  return (
    <div>
          <h2 className='text-3xl font-semibold m-4'>My Appointment</h2>
          <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>No</th>
        <th>Name</th>
        <th>Treatment</th>
        <th>Date</th>
        <th>Time</th>
        <th>Pay</th>
      </tr>
    </thead>
    <tbody>

    {
      bookings.map((booking,i) =>  <tr
      key={i}
      >
      <th>{i+1}</th>
      <td>{booking.patient}</td>
      <td>{booking.treatment}</td>
      <td>{booking.appointmentDate}</td>
      <td>{booking.slot}</td>
      <td>
        {
          booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}><button className='btn btn-sm btn-primary'>{booking.price}</button></Link>
        }
        {
          booking.price && booking.paid && <span className='text-primary'>Paid</span>
        }
        </td>
    </tr>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyAppointment;