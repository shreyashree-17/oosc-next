// pages/teams.tsx

'use client';
import TeamCard from '@/src/components/teamCard';
import React, { useEffect } from 'react';
import teamData from "../../src/utils/teamMembers";

const Teams: React.FC = () => {
  useEffect(() => {
    const scrollColorElements = document.querySelectorAll('.text-scroll-color');
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = scrollPosition / maxScroll;

      const color = scrollPercentage >= 0.7 ? 'white' : 'black';

      scrollColorElements.forEach((element) => {
        (element as HTMLElement).style.color = color;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to set the color

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <section id="teams" className="section teams">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-scroll-color">Teams</h2>
              <h3 className="section-subheading text-scroll-color">Meet our dedicated team.</h3>
            </div>
          </div>
          {teamData.map((teamSection, sectionIndex) => (
            <div key={sectionIndex} className="team-section">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h3 className="section-subheading text-scroll-color">{teamSection.section}</h3>
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