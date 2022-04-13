import React from 'react';
import Event from './Event';

const Events = () => {
    const event=[
        {name:"General assembly", desc:"meeting member and passsing time", img:'image/event.jpg' },
    ]
  return <React.Fragment>
     {event.map((event)=>{
         return <Event name={event.name} desc={event.desc} img={event.img} />

     })}
  </React.Fragment>;
};

export default Events;
