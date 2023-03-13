import React, { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils-Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils-Light Mode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title="Install TextUtils";
      // }, 1500);
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container my-3" >
          {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
          <Routes>
          <Route path="/about" element={<About />} />

          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode} />} />
           
          </Routes>
        </div>
      </Router>
</>
    
  );
}

export default App;
