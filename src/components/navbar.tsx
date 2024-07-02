"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import '../css/agency.css';
import '../css/bootstrap.css';
import '../css/font-awesome/css/font-awesome.min.css';

const Navbar: React.FC = () => {
  const params = useParams();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header page-scroll">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-expanded={!isNavCollapsed ? true : undefined}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link href="#page-top navbar-brand-img" passHref>
            <div className="page-scroll">
              <Image
                src="/img/oosc-logo.png"
                alt="OOSC Logo"
                width={100}
                height={100}
                className="navbar-brand-img"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </Link>
        </div>

        <div className={`collapse navbar-collapse ${isNavCollapsed ? '' : 'in'}`} id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/" passHref>
                <div className={`page-scroll ${params.id === '/' ? 'active' : ''}`}>
                  Home
                </div>
              </Link>
            </li>
            <li>
              <Link href="/events" passHref>
                <div className={`page-scroll ${params.id === '/events' ? 'active' : ''}`}>
                  Events
                </div>
              </Link>
            </li>
            <li>
              <Link href="/speakers" passHref>
                <div className={`page-scroll ${params.id === '/speakers' ? 'active' : ''}`}>
                  Speakers
                </div>
              </Link>
            </li>
            <li>
              <Link href="/calendar" passHref>
                <div className={`page-scroll ${params.id === '/calendar' ? 'active' : ''}`}>
                  Calendar
                </div>
              </Link>
            </li>
            <li>
              <Link href="/team" passHref>
                <div className={`page-scroll ${params.id === '/team' ? 'active' : ''}`}>
                  Team
                </div>
              </Link>
            </li>
            <li>
              <Link href="/registration" passHref>
                <div className={`page-scroll ${params.id === '/registration' ? 'active' : ''}`}>
                  Register
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact" passHref>
                <div className={`page-scroll ${params.id === '/contact' ? 'active' : ''}`}>
                  Contact
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
