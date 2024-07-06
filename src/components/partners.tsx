import React from 'react';
import Image from 'next/image';

const partners = [
  { src: "/img/logos/LinuxFoundation.png", alt: "Envato" },
  { src: "/img/logos/canonical.png", alt: "Designmodo" },
  { src: "/img/logos/zephyr.jpeg", alt: "Themeforest" },
  { src: "/img/logos/open_printing.png", alt: "Creative Market" },
];

const Partners: React.FC = () => {
  return (
    <aside className="clients">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Partners</h2>
          </div>
        </div>
        <div className="row">
          {partners.map((partner, index) => (
            <div className="col-md-3 col-sm-6" key={index}>
              <a href="#">
                <Image
                  src={partner.src}
                  className="img-responsive img-centered"
                  alt={partner.alt}
                  width={150}
                  height={150}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Partners;
