import React from 'react';
import Image from 'next/image';
import "../../src/css/bootstrap.css"
import '../../src/css/agency.css';
import '../../src/css/font-awesome/css/font-awesome.min.css';

const Calendar: React.FC = () => {
  const events = [
    {
      date: "10 August, 2024",
      title: "Registration Date",
      description: "The Open Source Opportunity awaits! Don't miss your chance to register for this premier event on August 24th. Mingle with fellow enthusiasts, developers, and contributors from around the world. Get ready to be inspired by thought leaders and delve into practical workshops on Snapcraft, DevOps, AI/ML, and more!",
      image: "/img/calendar/1.png",
      alt: "Registration Event"
    },
    {
      date: "24 and 25 August, 2024",
      title: "Talks and Workshops",
      description: "The 25th of August is packed with learning and engagement! Attend insightful talks, panels, and interactive sessions on cutting-edge topics like system components, cloud computing, and even OS distribution integration. Network with the open-source community and gain valuable insights to enhance your professional profile.",
      image: "/img/calendar/2.png",
      alt: "Workshop Event"
    },
    {
      date: "26 August, 2024",
      title: "Hackathon",
      description: "Calling all coding warriors! Gear up for the 26th of August - a 12-hour hackathon designed to challenge and reward your skills. Collaborate with your team, tackle surprise challenges, and compete for amazing prizes. Enjoy complimentary food, fun activities, and the thrill of a competitive environment as you push your boundaries and create something awesome!",
      image: "/img/calendar/3.jpg",
      alt: "Hackathon Event"
    }
  ];

  return (
    <section id="calendar">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Calendar</h2>
            <h3 className="section-subheading text-muted">Upcoming Events and Workshops</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {events.map((event, index) => (
                <li key={index} className={index % 2 === 1 ? 'timeline-inverted' : ''}>
                  <div className="timeline-image">
                    <Image src={event.image} alt={event.alt} width={400} height={400} className="img-circle" />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4>{event.date}</h4>
                      <h4 className="subheading">{event.title}</h4>
                    </div>
                    <div className="timeline-body">
                      <p className="text-muted">{event.description}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>Be Part
                    <br />Of Our
                    <br />Story!</h4>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;