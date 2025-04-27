import HeaderComponent from './header.jsx';
import React, { useState } from 'react';
import CodeforcesContests from './footer.jsx'
import Alert from './alert.jsx';
import About from './about.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [back,setback]=useState(false);
  
  const edit_back=()=>{
    setback(!back);
  };
  const backgroundStyle = {
    backgroundColor: back ? 'black' : 'white',
    minHeight: '100vh',
    color: 'white',
  };
  const [alert, setAlert] = useState(null);

  const handleAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000); 
  };
  const hello={
         letterSpacing: '-2px'
  };
  return (
    <Router>
      <div style={backgroundStyle}>
        <HeaderComponent rishi={edit_back} />

        <Routes>
        <Route path="/about" element={<About color={back ? 'white' : 'black'} />} />

          <Route
            path="/"
            element={
              <>
                <Alert alert={alert} />
                <CodeforcesContests onButtonClick={handleAlert} />
                <h1 style={hello}>Hello world!...</h1>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
