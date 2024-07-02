import React from 'react';
import {hackathons} from '../../../src/utils/events';
import EventsItem from '@/src/components/eventsItem';

const RegisterSection: React.FC = () => {

  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Closing Ceremony</h2>
          </div>
        </div>
        <div className="row">
            <div className="portfolio-caption">
                <h4 style={{fontWeight: "bolder"}}>Event Overview</h4>
                <br></br>
                <p className="text-muted"  style={{fontStyle: "normal"}}>Date: 24th August <br/> Time: 8:00 PM - 10:00 PM <br/> <br/></p>
            </div>
            <div className="portfolio-caption">
                <h4 style={{fontWeight: "bolder"}}>Event Description</h4>
                <br></br>
                <p className="text-muted"  style={{fontStyle: "normal"}}>The Networking Dinner is an integral part of the open-source conference at IIT Kanpur, providing a relaxed and informal setting for attendees to connect, share ideas, and build meaningful relationships. This dinner aims to foster collaboration and networking among participants, speakers, mentors, and industry experts. <br/> <br/></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
