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
                <p className="text-muted"  style={{fontStyle: "normal"}}>Date: 26th August <br/> Time: 6:00 PM - 9:00 PM <br/> <br/></p>
            </div>
            <div className="portfolio-caption">
                <h4 style={{fontWeight: "bolder"}}>Event Description</h4>
                <br></br>
                <p className="text-muted"  style={{fontStyle: "normal"}}>The Closing Ceremony marks the conclusion of the open-source conference at IIT Kanpur, celebrating the achievements and contributions of all participants. This ceremony is a time to reflect on the insights gained, acknowledge the hard work of the attendees, and recognize the outstanding projects and efforts showcased during the event.  <br/> <br/></p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
