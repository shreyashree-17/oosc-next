// pages/teams.tsx

import TeamCard from '@/src/components/teamCard';
import React from 'react';
// import TeamCard from '../../src/components/TeamCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import teamData from "../../src/utils/teamMembers";

const Teams: React.FC = () => {
  return (
    <div>

      <section id="teams" className="section teams">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Teams</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
          </div>
          <div className="row text-center">
            {teamData.map((team, index) => (
              <TeamCard key={index} {...team} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Teams;
