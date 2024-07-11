// pages/teams.tsx

'use client';
import TeamCard from '@/src/components/teamCard';
import React from 'react';
import teamData from "../../src/utils/teamMembers";

const Teams: React.FC = () => {
  return (
    <div>
      <section id="teams" className="section teams">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading" style={{ color: 'black' }}>Teams</h2>
              <h3 className="section-subheading" style={{ color: 'black' }}>Meet our dedicated team.</h3>
            </div>
          </div>
          {teamData.map((teamSection, sectionIndex) => (
            <div key={sectionIndex} className="team-section">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3 className="section-subheading" style={{ color: 'black' }}>{teamSection.section}</h3>
                </div>
              </div>
              <div className="row justify-content-center">
                {teamSection.members.map((team, memberIndex) => (
                  <TeamCard key={memberIndex} {...team} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;