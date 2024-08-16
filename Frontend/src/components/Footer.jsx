import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="banner">
          <div className="left">PALLAVI</div>
          <div className="right">
            <p>JAWAHAR NAGAR</p>
            <p>Open : 05:00 PM - 12:00 AM</p>
          </div>
        </div>
        <div className="banner"> {/* Corrected class name */}
          <div className="left">
            <p>Developed by Pallavi</p>
          </div>
          <div className="right">
            <p>All Rights Reserved By Pallavi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
