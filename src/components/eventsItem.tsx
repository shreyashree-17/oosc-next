import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface EventsItemProps {
  href: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
}

const EventsItem: React.FC<EventsItemProps> = ({ href, imgSrc, imgAlt, title, subtitle }) => {
  return (
    <div className="col-md-4 col-sm-6 portfolio-item">
      {/* <Link href={href}>
        <div className="portfolio-link" data-toggle="modal">
          <div className="portfolio-hover">
            <div className="portfolio-hover-content">
              <i className="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <Image src={imgSrc} className="img-responsive" alt={imgAlt} width={500} height={500} />
        </div>
      </Link> */}
      <div className="portfolio-caption">
        <h4 style={{fontWeight: "bolder"}}>{title}</h4>
        <br></br>
        <p className="text-muted"  style={{fontStyle: "normal"}}>{subtitle}</p>
      </div>
    </div>
  );
};

export default EventsItem;
