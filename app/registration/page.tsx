"use client"
import React from 'react';

const Registration: React.FC = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Register for the Conference</h2>
            <div className="section-subheading text-muted" style={{color: "#c4c4c4", paddingBottom: "0", fontStyle:"italic"}}>
              <h4>How to register?</h4>
              <p style={{color: "#c4c4c4", padding: "0"}}>To register for the Opportunity Open Source Conference as either an Attendee or a Speaker, please fill out the form below. If you are registering as an Attendee, we will send you your invitation. If you are applying to be a Speaker, we will contact you shortly.<br/><br/></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdeiLqjYGpFbZAO8JB7aNJIqpJ7JanHoPzqg955BQMVjhe4EA/viewform?embedded=true" 
              width="100%" 
              height="1200" >Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
