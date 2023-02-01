import React from 'react';
import floride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';

const servicesData = [
  {
    id:1,
    name: 'Fluoride Treatment',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    img: floride
  },
  {
    id:2,
    name: 'Cavity Filling',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    img: cavity
  },
  {
    id:3,
    name: 'Teeth Whitening',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
    img: whitening
  }
]
const Services = () => {
  return (
    <div className='my-32'>
          <div className='text-center font-semibold'>
                <h2 className='text-primary uppercase text-xl font-bold'>OUR SERVICES</h2>
                <p className='text-3xl'>Services We Provide</p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                  servicesData.map(service=><Service
                  key={service.id}
                  service={service}
                  ></Service>)
                }
          </div>
    </div>
  );
};

export default Services;