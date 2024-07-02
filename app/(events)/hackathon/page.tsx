import React from 'react';
import {hackathons} from '../../../src/utils/events';
import EventsItem from '@/src/components/eventsItem';

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
                <h4 style={{fontWeight: "bolder"}}>Event Overview</h4>
                <br></br>
                <p className="text-muted"  style={{fontStyle: "normal"}}>Date: 26th August <br/> Time: 3:00 AM - 3:00 PM <br/> <br/></p>
            </div>
            <div className="portfolio-caption">
                <h4 style={{fontWeight: "bolder"}}>Event Description</h4>
                <br></br>
                <p className="text-muted"  style={{fontStyle: "normal"}}>The 12-hour hackathon is an intense and rewarding marathon coding session designed to foster realtime collaboration and competition among participants. This offline event will provide a unique opportunity for developers to work together on-site, tackle challenging problems, and showcase their creativity and technical skills. <br/> <br/></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
