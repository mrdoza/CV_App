import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Info from "./components/Info.jsx";
import Signal from "./components/Signal.jsx";
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState([]);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <>
      <Header />
      <Signal />
      <Info onSubmit={handleFormSubmit} />
      <Body formData={formData} />
    </>
  );
}

export default App;
