import React from 'react';
import Image from 'next/image';

const App: React.FC = () => {
  return (
    <div id="page-top" className="index">
      {/* Navigation */}
      {/* <Navbar/> */}

      {/* Header */}
      <header>
        <div className="container">
          <div className="intro-text">
            <div className="intro-heading">Opportunity<br />Open-Source Conference</div>
            <div className="intro-lead-in">24th - 26th August</div>
            <a href="#events" className="page-scroll btn btn-xl">Tell Me More</a>
          </div>
        </div>
      </header>

      {/* Clients Aside */}
      <aside className="clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Partners</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <Image
                  src="/img/logos/envato.jpg"
                  className="img-responsive img-centered"
                  alt="Envato"
                  width={150}
                  height={150}
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <Image
                  src="/img/logos/designmodo.jpg"
                  className="img-responsive img-centered"
                  alt="Designmodo"
                  width={150}
                  height={150}
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <Image
                  src="/img/logos/themeforest.jpg"
                  className="img-responsive img-centered"
                  alt="Themeforest"
                  width={150}
                  height={150}
                />
              </a>
            </div>
            <div className="col-md-3 col-sm-6">
              <a href="#">
                <Image
                  src="/img/logos/creative-market.jpg"
                  className="img-responsive img-centered"
                  alt="Creative Market"
                  width={150}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default App;
