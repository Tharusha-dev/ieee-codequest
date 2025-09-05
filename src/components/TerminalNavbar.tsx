'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import './TerminalNavbar.css';

const TerminalNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="terminal-navbar">
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <div className={`terminal-body ${isOpen ? 'open' : ''}`}>
        <span className="prompt">$&nbsp;</span>
        <Link href="#introduction" className="nav-link" onClick={() => setIsOpen(false)}>
          ./Introduction
        </Link>
        <span className="prompt">$&nbsp;</span>
        <Link href="#timeline" className="nav-link" onClick={() => setIsOpen(false)}>
          ./Timeline
        </Link>
        <span className="prompt">$&nbsp;</span>
        <Link href="#prizes" className="nav-link" onClick={() => setIsOpen(false)}>
          ./Prizes
        </Link>
        <span className="prompt">$&nbsp;</span>
        <Link href="#faq" className="nav-link" onClick={() => setIsOpen(false)}>
          ./FAQ
        </Link>
      </div>
    </div>
  );
};

export default TerminalNavbar;