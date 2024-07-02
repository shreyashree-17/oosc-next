import Link from 'next/link';
import React from 'react';

interface EventsItemProps {
  iconClass: string;
  title: string;
  description: string;
  href: string;
}

const ServiceItem: React.FC<EventsItemProps> = ({ href, iconClass, title, description }) => {
  return (
    <div className="col-md-4">
        <Link href={href}>
        <span className="fa-stack fa-4x">
            <i className="fa fa-circle fa-stack-2x text-primary"></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
        </span>
        <h4 className="service-heading">{title}</h4>
        <p className="text-muted">{description}</p>
        </Link>
        <br/><br/><br/>
    </div>
  );
};

export default ServiceItem;
