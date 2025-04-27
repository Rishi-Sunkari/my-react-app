import React from 'react';

const CodeforcesContests = ({ onButtonClick }) => {
  const btnStyle = {
    display: "flex",
    marginLeft: "35%",
    marginTop: "90px",
    gap: "80px",
  };

  return (
    <div style={btnStyle}>
      <button className="btn btn-primary" onClick={() => onButtonClick("Primary button clicked!", "primary")}>Primary</button>
      <button className="btn btn-secondary" onClick={() => onButtonClick("Secondary button clicked!", "secondary")}>Secondary</button>
      <button className="btn btn-success" onClick={() => onButtonClick("Success button clicked!", "success")}>Success</button>
      <button className="btn btn-danger" onClick={() => onButtonClick("Danger button clicked!", "danger")}>Danger</button>
    </div>
  );
};

export default CodeforcesContests;
