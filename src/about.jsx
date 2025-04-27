import React from 'react';

function About({ color }) {
  return (
    <div style={{ color: color }}>
      <p>
        In this example we have 3 “pages” handled by the router. A home page renders with a real href, so people using the keyboard for navigation or screen readers will still be able to use this app.
      </p>
    </div>
  );
}

export default About;
