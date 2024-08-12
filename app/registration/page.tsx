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
              height="1200" 
            >Loading…
            </iframe>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12 text-center">
            <h3 className="section-heading">Payment Instructions</h3>
            <p style={{color: "#c4c4c4", padding: "0"}}>To complete your registration, please follow the steps below to make the payment:</p>
            <ol style={{color: "#c4c4c4", textAlign: "left", display: "inline-block"}}>
              <li>
                Click the "Make Payment" button below to go to the SBI Collect payment page.
              </li>
              <li>
                On the SBI Collect page, select "Opportunity Open Source Conference" from the payment category dropdown.
                <div className="mt-2">
                  <img src="../../img/payment1.png" alt="Select Payment Category" className="img-fluid" />
                </div>
              </li>
              <li>
                Enter your details and follow the instructions to complete the payment.
                <div className="mt-2">
                  <img src="../../img/payment2.png" alt="Enter Payment Details" className="img-fluid" />
                </div>
              </li>
              <li>
                Save the receipt for future reference.
              </li>
            </ol>
            <a href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm?corpID=314456" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">Make Payment</a>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <h3 className="section-heading">Contact Information</h3>
            <p style={{color: "#c4c4c4", padding: "0"}}>In case of any problems with the registration process, please contact-</p>
            <p style={{color: "#c4c4c4", padding: "0"}}><strong>Devagya Vats - </strong>7042510704</p>
            <p style={{color: "#c4c4c4", padding: "0"}}><strong>Aditya Ranjan - </strong>76678 15014</p>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
