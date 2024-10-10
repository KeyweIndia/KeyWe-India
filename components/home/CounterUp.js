"use client"
import React, { useEffect, useState } from 'react';

import CountUp from 'react-countup';
import { useMediaQuery, useTheme } from '@mui/material';

const CounterUp = () => {
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
      className={`text-white  text-center `}
      
    >
     <div className=''>
     <div
        className={`grid ${isSmallScreen ? 'grid-cols-2' : 'grid-cols-2'} justify-around  items-center p-5 md:gap-5 gap-4`}
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
  );
};

const CounterItem = ({ countOn, start, end, label }) => {
  return (
    <div className="text-center ">
     <div className=''>
   <div className="flex flex-col">
   <div style={{ boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' }} className="bg-transparent/10 border-2 rounded-[10px] border-primary p-5 ">
    <div className='text-white font-bold lg:text-4xl tracking-wide text-4xl'>
        {countOn && <CountUp start={start} end={end} duration={2} delay={0} />}{' '}
        +
      </div>
      <div className='text-gray-300 text-lg font-medium tracking-wide mt-5'>
        {label}
      </div>
    </div>
   </div>
     </div>
    </div>
  );
};

export default CounterUp;
