import React from 'react'
const mapStyle = {
    border: '0',
    width: '100%', // Set width to 100%
    height: '1250px',
  };
const ContactForm = () => {
  return (
    <div>
        <div className='container mx-auto'>
        <div className='w-full '> 
      <iframe
        src="https://forms.office.com/r/Epr0aWsaeQ"
        width="100%"
       
        style={mapStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className='my-10'
      ></iframe>
    </div>
        </div>
       
    </div>
  )
}

export default ContactForm


