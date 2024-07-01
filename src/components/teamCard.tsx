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
    <div className="col-md-4">
      <div className="speaker">
        <figure className='img-circle'>
          <img alt={name} className="img-responsive center-block" src={imgSrc} />
        </figure>
        <h4>{name}</h4>
        <p>{title}</p>
        <ul className="social-block">
          <li><a href={twitterUrl} className="social-link"><i className="ion-social-twitter"></i></a></li>
          <li><a href={facebookUrl} className="social-link"><i className="ion-social-facebook"></i></a></li>
          <li><a href={linkedinUrl} className="social-link"><i className="ion-social-linkedin-outline"></i></a></li>
          <li><a href={googleplusUrl} className="social-link"><i className="ion-social-googleplus"></i></a></li>
        </ul>
      </div>
    </div>
  );
};

export default TeamCard;
