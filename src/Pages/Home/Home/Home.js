import React from 'react';
import Banner from '../Banner/Banner';
import ExtraData from '../ExtraData/ExtraData';
import InfoCard from '../InfoCard/InfoCard';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div className='mx-5'>
          <Banner/>
          <InfoCard/>
          <Services/>
          <ExtraData></ExtraData>
          <MakeAppointment></MakeAppointment>
          <Testimonial></Testimonial>
    </div>
  );
};

export default Home;