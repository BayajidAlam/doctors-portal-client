import { async } from "@firebase/util";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import BookingModal from "../BookingModal/BookingModal";
import AppointmentOptions from "./AppointmentOptions";

const AvaliableAppointment = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOptions] = useState([]);
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate,'PP')
  
  const {data:appointmentOptions=[],refetch,isLoading} = useQuery({
    queryKey: ['appointmentOptions',date],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
      const data = await res.json()
      return data
    }
  })

  if(isLoading){
    return <Loading></Loading>
  }
  // const { data:appointmentOptions=[], isLoading } = useQuery({
  //   queryKey: ['appointmentOptions'],
  //   queryFn: () => fetch('http://localhost:5000/appointmentOptions')
  //   .then(res =>res.json())
  // })

  return (
    <section>
      <p className="text-center font-bold text-secondary text-2xl">
        Available Appointments on {format(selectedDate, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {appointmentOptions.map((option) => (
          <AppointmentOptions
            key={option._id}
            option={option}
            setTreatment={setTreatment}
          ></AppointmentOptions>
        ))}
      </div>
      {treatment && <BookingModal 
      treatment={treatment}
      selectedDate={selectedDate}
      setTreatment={setTreatment}
      refetch={refetch}
      ></BookingModal>}
    </section>
  );
};

export default AvaliableAppointment;
