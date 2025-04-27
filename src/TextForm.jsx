import React, { useState } from 'react';

const TextForm = ({ toggleStyle }) => {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
 
  

  return (
    <>
      <div className="form-floating" style={{ marginLeft: "20%", marginRight: "20%" , marginTop:"2%"}}>
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={text}
          onChange={handleChange}
        ></textarea>
        <label htmlFor="floatingTextarea">Comments</label>
      </div>
      <button className="btn btn-primary mt-2 " style={{ marginLeft: "20%", marginRight: "20%" , marginTop:"2%"}} onClick={handleUpperCase}>
        To Upper
      </button>
      <button className="btn btn-primary mt-2" style={{ marginLeft: "31%", marginRight: "20%" , marginTop:"2%"}} onClick={handleLowerCase}>
        To Lower
      </button>
      <p className="form-floating" style={{ marginLeft: "71%", marginRight: "20%" , marginTop:"2%"}} ><b>Number of letters</b>: {text.length}</p>
      <h1 className="form-floating" style={{ marginLeft: "20%", marginRight: "20%" , marginTop:"2%"}}>preview</h1>
      <p className="form-floating" style={{ width: "fit-content", marginLeft: "20%", marginRight: "20%" , marginTop:"2%"}} onChange={toggleStyle}>{text.toLowerCase()}</p>
      
    </>
  );
};

export default TextForm;
