import React from 'react';
import './AboutPage.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="about">
      <div>
        <p>I wanted to create an application that would combine my love for 
          skateboarding and technology. For skaters to share their own skate spots 
          and can post something new that they found or a place that they know about. This way skaters can explore new skate spots and have fun doing so at the same time.</p>
      </div>
    </div>
  );
}

export default AboutPage;
