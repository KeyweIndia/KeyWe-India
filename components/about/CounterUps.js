"use client"
import React, { useEffect, useState } from 'react';

import CountUp from 'react-countup';
import { useMediaQuery, useTheme } from '@mui/material';

const CounterUps = () => {
  const [countOn, setCountOn] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight * 0.8; // Adjust the offset as needed
      const element = document.getElementById('counterSection');

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < offset && rect.bottom >= 0;
        setCountOn(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div
      id='counterSection'
    className={`bg-[url('/creative-gradient-futuristic-background_23-2149136589.jpg')] bg-fixed bg-cover bg-center text-white`}
      
    >
         <div className='bg-[rgba(15,15,15,0.60)] h-full w-full py-16  flex justify-center items-center'>
         <div className='container mx-auto'>
     <div
        className={`flex ${isSmallScreen ? 'flex-col' : 'flex-row'} justify-around  items-center  gap-5`}
      >
      <CounterItem
          countOn={countOn}
          start={0}
          end={100}
          label='Complete Projects'
        />
        <CounterItem
          countOn={countOn}
          start={0}
          end={25}
          label='Happy Clients'
        />
        <CounterItem
          countOn={countOn}
          start={0}
          end={20}
          label='Team Members'
        />
        <CounterItem
          countOn={countOn}
          start={0}
          end={10}
          label='Year of Experience'
        />
      </div>
     </div>
         </div>
     

    </div>
  );
};

const CounterItem = ({ countOn, start, end, label }) => {
  return (
    <div className="text-center ">
     <div className='container mx-auto'>
     <div className='text-white font-bold lg:text-6xl tracking-wide text-3xl'>
        {countOn && <CountUp start={start} end={end} duration={2} delay={0} />}{' '}
        +
      </div>
      <div className='text-white text-lg font-medium tracking-wide mt-5'>
        {label}
      </div>
     </div>
    </div>
  );
};

export default CounterUps;
