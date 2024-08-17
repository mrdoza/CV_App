import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Info from "./components/Info.jsx";
import Edu from "./components/Edu.jsx";
import Exp from "./components/Exp.jsx";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Header />

      <div className="content">
        <div className="inputs">
          <Info onSubmit={handleFormSubmit} />
          <Edu onSubmit={handleFormSubmit} />
          <Exp onSubmit={handleFormSubmit} />
        </div>
        <div className="main-form">
          <Body formData={formData} />
        </div>
      </div>
    </>
  );
}

export default App;
