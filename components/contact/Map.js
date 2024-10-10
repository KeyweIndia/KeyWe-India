import React from 'react'

const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '400px',
  };

const Map = () => {
  return (
    <div className=''>
       <div className='w-full '> 
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.670938007969!2d75.75150207422006!3d26.882193961403697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db55220512f01%3A0x23257aefcdaea079!2sKeyWe%20India%20Private%20limited!5e0!3m2!1sen!2sin!4v1715946452417!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
  )
}

export default Map
