// // components/SpeakerCard.tsx

// import React from 'react';

// interface SpeakerCardProps {
//   imgSrc: string;
//   name: string;
//   title: string;
//   twitterUrl: string;
//   facebookUrl: string;
//   linkedinUrl: string;
//   googleplusUrl: string;
// }

// const SpeakerCard: React.FC<SpeakerCardProps> = ({ imgSrc, name, title, twitterUrl, facebookUrl, linkedinUrl, googleplusUrl }) => {
//   return (
//     <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
//       <div className="speaker text-center">
//         <figure>
//           <img alt={name} className="img-responsive center-block" src={imgSrc} />
//         </figure>
//         <h4>{name}</h4>
//         <p>
//           {title.split('\n').map((line, index) => (
//             <React.Fragment key={index}>
//               {line}
//               <br />
//             </React.Fragment>
//           ))}
//         </p>
//         <ul className="social-block">
//           {twitterUrl && (
//             <li><a href={twitterUrl} className="social-link"><i className="ion-social-twitter"></i></a></li>
//           )}
//           {facebookUrl && (
//             <li><a href={facebookUrl} className="social-link"><i className="ion-social-facebook"></i></a></li>
//           )}
//           {linkedinUrl && (
//             <li><a href={linkedinUrl} className="social-link"><i className="ion-social-linkedin-outline"></i></a></li>
//           )}
//           {googleplusUrl && (
//             <li><a href={googleplusUrl} className="social-link"><i className="ion-social-googleplus"></i></a></li>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SpeakerCard;

import React from 'react';

interface SpeakerCardProps {
  imgSrc: string;
  name: string;
  title: string;
  twitterUrl: string;
  facebookUrl: string;
  linkedinUrl: string;
  googleplusUrl: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({ imgSrc, name, title, twitterUrl, facebookUrl, linkedinUrl, googleplusUrl }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
      <div className="speaker text-center">
        <figure>
          <img alt={name} className="img-responsive center-block" src={imgSrc} />
        </figure>
        <h4 className="text-scroll-color">{name}</h4>
        <p className="text-scroll-color">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <ul className="social-block">
          {twitterUrl && (
            <li><a href={twitterUrl} className="social-link"><i className="ion-social-twitter"></i></a></li>
          )}
          {facebookUrl && (
            <li><a href={facebookUrl} className="social-link"><i className="ion-social-facebook"></i></a></li>
          )}
          {linkedinUrl && (
            <li><a href={linkedinUrl} className="social-link"><i className="ion-social-linkedin-outline"></i></a></li>
          )}
          {googleplusUrl && (
            <li><a href={googleplusUrl} className="social-link"><i className="ion-social-googleplus"></i></a></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SpeakerCard;