import React from 'react';

const RegisterSection: React.FC = () => {
  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Hackathon</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-caption">
            <h4 style={{ fontWeight: 'bolder' }}>Event Overview</h4>
            <br />
            <p className="text-muted" style={{ fontStyle: 'normal' }}>
              Date: 25-26th August 2024 <br />
              Time: 12-hour Offline Hackathon <br />
              Team Size: 3-4 Members (±1 Optional) <br />
            </p>
          </div>
          <div className="portfolio-caption">
            <h4 style={{ fontWeight: 'bolder' }}>Event Description</h4>
            <br />
            <p className="text-muted" style={{ fontStyle: 'normal' }}>
              The 12-hour hackathon is an intense and rewarding marathon coding session designed to foster real-time collaboration and competition among participants. This offline event will provide a unique opportunity for developers to work together on-site, tackle challenging problems, and showcase their creativity and technical skills. The hackathon focuses on GenAI and Dev, pushing the boundaries of what can be achieved within a short span of time. <br />
              <br />
              Sponsors: <br />
              - Trumio: Own Your Work <br />
              - Overlayy <br />
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
