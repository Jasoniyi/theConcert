import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.682175169299!2d3.420593814266365!3d6.434853725973994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf52c200dc14f%3A0xbc9bcd9ac12d2630!2sLagos+Continental+Hotel!5e0!3m2!1sen!2sng!4v1563724276089!5m2!1sen!2sng"
        width="100%"
        height="500"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
