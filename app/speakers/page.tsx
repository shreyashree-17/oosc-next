// pages/speakers.tsx

import SpeakerCard from '@/src/components/speakerCard';
import React from 'react';
import speakerData from "../../src/utils/speakerData";

const Speakers: React.FC = () => {
  return (
    <div>
      <section id="speakers" className="section speakers">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Speakers</h2>
              <h3 className="section-subheading text-muted">Meet our amazing speakers</h3>
            </div>
          </div>
          <div className="row justify-content-center">
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
