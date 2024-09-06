import React, { useEffect, useState, useRef } from 'react';
import Home from './pages/Home';
import EventDetails from './pages/EventDetails';
import RSVPForm from './pages/RSVPForm';
import Navbar from './components/Navbar';
import './App.css';
import InvitationLetter from './pages/InvitationLetter';

function App() {
  const sections = useRef({}); // 각 섹션의 DOM 요소를 참조할 객체
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id); // 현재 보이는 섹션의 ID를 활성화된 섹션으로 설정
          }
        });
      },
      { threshold: 0.7 } // 섹션이 70% 보이면 활성화
    );

    // 각 섹션 요소를 observer에 연결
    Object.values(sections.current).forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      Object.values(sections.current).forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  return (
    <div className="app-container">
      {/* 고정된 네비게이션 바 */}
      <Navbar activeSection={activeSection} />

      {/* 페이지 섹션 */}
      <div ref={(el) => (sections.current['home'] = el)} id="home" className="section">
        <Home />
      </div>
      <div ref={(el) => (sections.current['invite-letter'] = el)} id="invite-letter" className="section">
        <InvitationLetter/>
      </div>
      <div ref={(el) => (sections.current['event-details'] = el)} id="event-details" className="section">
        <EventDetails />
      </div>
      <div ref={(el) => (sections.current['rsvp'] = el)} id="rsvp" className="section">
        <RSVPForm />
      </div>
    </div>
  );
}

export default App;
