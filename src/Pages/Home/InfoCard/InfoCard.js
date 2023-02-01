import React from 'react';
import Card from './Card';
import clock from '../../../assets/icons/clock.svg';
import market from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';

const InfoCard = () => {

  const cardData = [
    {
      id:1,
      name: 'Opening Hours',
      icon: clock,
      description: 'Lorem Ipsum is simply dummy text of the pri',
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      id:2,
      name: 'Visit our location',
      icon: market,
      description: 'Brooklyn, NY 10036, United States',
      bgClass: 'bg-accent'
    },
    {
      id:3,
      name: 'Contact us now',
      icon: phone,
      description: '+000 123 456789',
      bgClass: 'bg-gradient-to-r from-primary to-secondary'
    }
  ]
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-20'>
          {
            cardData.map(data=><Card
            key={data.id}
            data={data}
            ></Card>)
          }
    </div>
  );
};

export default InfoCard;