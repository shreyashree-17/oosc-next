// components/TeamCard.tsx

import React from 'react';
import "../css/bootstrap.css"

interface TeamCardProps {
  imgSrc: string;
  name: string;
  title: string;
  twitterUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  googleplusUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ imgSrc, name, title, twitterUrl, facebookUrl, linkedinUrl, googleplusUrl }) => {
  return (
    <div className="col-lg-4 col-md-6 d-flex justify-content-center mb-4">
      <div className="team-member text-center">
        <figure>
          <img alt={name} className="img-fluid rounded-circle" src={imgSrc} />
        </figure>
        <h4 className="text-scroll-color">{name}</h4>
        <p className="text-scroll-color">{title}</p>
        <ul className="social-block">
          {twitterUrl && <li><a href={twitterUrl} className="social-link"><i className="ion-social-twitter"></i></a></li>}
          {facebookUrl && <li><a href={facebookUrl} className="social-link"><i className="ion-social-facebook"></i></a></li>}
          {linkedinUrl && <li><a href={linkedinUrl} className="social-link"><i className="ion-social-linkedin-outline"></i></a></li>}
          {googleplusUrl && <li><a href={googleplusUrl} className="social-link"><i className="ion-social-googleplus"></i></a></li>}
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;