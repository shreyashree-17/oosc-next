import React from 'react';
import {workshopsItems} from '../../../src/utils/events';
import EventsItem from '@/src/components/eventsItem';

const RegisterSection: React.FC = () => {

  return (
    <section id="portfolio" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Workshops</h2>
            <h3 className="section-subheading text-muted"> Detailed list of topics to be covered in the workshops during the open-source conference at IIT Kanpur:
            </h3>
          </div>
        </div>
        <div className="row">
          {workshopsItems.map((item, index) => (
            <EventsItem
              key={index}
              href={item.href}
              imgSrc={item.imgSrc}
              imgAlt={item.imgAlt}
              title={item.title}
              subtitle={item.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisterSection;
