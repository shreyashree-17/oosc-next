import React from 'react';
import Image from 'next/image';
// import Wave from '@/src/waves/components/wave';
import Partners from '@/src/components/partners';
// import Partners from '@/src/partners/components/Partners';

const App: React.FC = () => {
  return (
    <div id="page-top" className="index">
      <header>
        {/* <Wave/> */}
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Opportunity<br />Open-Source Conference</div>
            <div className="intro-lead-in">24th - 26th August</div>
            {/* <a href="#about" className="page-scroll btn btn-xl">Tell Me More</a> */}
            <br /><br />
            <a href="https://events.canonical.com/event/89/overview" className="page-scroll btn btn-xl">Call for Proposals</a>
          </div>
        </div>
      </header>
      
      <section id="about" className="bg-light-gray">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h3 className="section-heading">About</h3>
            </div>
          </div>
          <div className="row">
            <div className="portfolio-caption">
              <br />
              <p className="text-muted" style={{ fontStyle: "normal" }}>
                The Open Source Conference (OOSC), is a premier event dedicated to foster innovation, collaboration, and learning in the open-source community. This gathering brings together developers, enthusiasts, industry experts, and academics to explore the latest trends, tools, and projects in open source. Be a part of the vibrant open-source community this year, at IIT Kanpur. Whether you are a developer, student, researcher, or enthusiast, the OOSC offers something for everyone. Join us to learn, innovate, and contribute to the open-source movement. <br /> <br />
                <a href="https://events.canonical.com/event/89/overview" className="page-scroll btn btn-xl">Call for Proposals</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Partners/>
    </div>
  );
}

export default App;
