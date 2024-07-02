import React from 'react';
import ServiceItem from '../../src/components/eventsCommon';
import { eventsData } from '../../src/utils/events'; // Adjust the path as per your project structure

const Events: React.FC = () => {
  return (
    <div>
      <section id="events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Events</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>

          <div className="row text-center">
            {eventsData.map((service, index) => (
              <ServiceItem
                key={index}
                iconClass={service.iconClass}
                title={service.title}
                description={service.description}
                href= {service.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
