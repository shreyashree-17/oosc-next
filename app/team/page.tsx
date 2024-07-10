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

      scrollColorElements.forEach((element) => {
        let color;
        if (scrollPercentage < 0.7) {
          const value = Math.floor(80 * (scrollPercentage / 0.7));
          color = `rgb(${value}, ${value}, ${value})`;
        } else {
          const remainingPercentage = (scrollPercentage - 0.7) / 0.3;
          const value = Math.floor(80 + (175 * remainingPercentage));
          color = `rgb(${value}, ${value}, ${value})`;
        }
        (element as HTMLElement).style.color = color;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 

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