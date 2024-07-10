// // pages/speakers.tsx

// import React from 'react';
// import SpeakerCard from '@/src/components/speakerCard';
// import speakerData from '../../src/utils/speakerData';

// const Speakers: React.FC = () => {
//   return (
//     <div>
//       <section id="speakers" className="section speakers">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12 text-center">
//               <h2 className="section-heading">Speakers</h2>
//               <h3 className="section-subheading text-muted">Meet our amazing speakers</h3>
//             </div>
//           </div>
//           <div className="row">
//             {speakerData.map((speaker, index) => (
//               <SpeakerCard key={index} {...speaker} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Speakers;

'use client';

import React, { useEffect } from 'react';
import SpeakerCard from '@/src/components/speakerCard';
import speakerData from '../../src/utils/speakerData';

const Speakers: React.FC = () => {
  useEffect(() => {
    const scrollColorElements = document.querySelectorAll('.text-scroll-color');
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      scrollColorElements.forEach((element) => {
        const r = Math.floor(255 * scrollPercentage);
        const g = Math.floor(255 * scrollPercentage);
        const b = Math.floor(255 * scrollPercentage);
        (element as HTMLElement).style.color = `rgb(${r}, ${g}, ${b})`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial call to set the color correctly on page load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-scroll-color">Speakers</h2>
              <h3 className="section-subheading text-scroll-color">Meet our amazing speakers</h3>
            </div>
          </div>
          <div className="row">
            {speakerData.map((speaker, index) => (
              <SpeakerCard key={index} {...speaker} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Speakers;