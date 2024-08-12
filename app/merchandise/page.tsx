import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import '../css/agency.css';
// import '../css/bootstrap.css';
// import '../css/font-awesome/css/font-awesome.min.css';

const Merchandise: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading">Merchandise</h2>
          <h3 className="section-subheading text-muted">Get your official OOSC T-shirt!</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Image
            src="/public/img/tshirt_design.png"
            alt="OOSC T-shirt"
            width={500}
            height={500}
            className="img-responsive"
          />
        </div>
        <div className="col-md-6">
          <h4>OOSC T-shirt</h4>
          <p className="text-muted">
            Show your support for the Open-Source Conference with this exclusive T-shirt.
            Available in various sizes. To purchase, please fill out the form linked below.
          </p>
          <Link href="https://forms.gle/A3ekm3NGUQm2GaMG9" passHref legacyBehavior>
            <a className="btn btn-xl">Buy Now</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
