import React from 'react';
import './Navbar.css';

function Navbar({ activeSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeSection === 'home' ? 'active' : ''}>
          <a href="#home">Home</a>
        </li>
        <li className={activeSection === 'invite-letter' ? 'active' : ''}>
          <a href="#invite-letter">초대의 글</a>
        </li>
        <li className={activeSection === 'event-details' ? 'active' : ''}>
          <a href="#event-details">오시는 길</a>
        </li>
        <li className={activeSection === 'rsvp' ? 'active' : ''}>
          <a href="#rsvp">마음 전하실 곳</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;