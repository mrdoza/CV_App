import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Info from "./components/Info.jsx";
import Edu from "./components/Edu.jsx";
import Exp from "./components/Exp.jsx";
import React, { useState, useEffect } from "react";

function App() {
  const [infoData, setInfoData] = useState({});
  const [eduData, setEduData] = useState([]);
  const [expData, setExpData] = useState([]);

  const handleInfoSubmit = (data) => {
    setInfoData(data);
    localStorage.setItem("infoData", JSON.stringify(data));
  };

  const handleEduSubmit = (data, index) => {
    const newEduData = [...eduData];
    newEduData[index] = data;
    setEduData(newEduData);
    localStorage.setItem("eduData", JSON.stringify(newEduData));
  };

  const handleExpSubmit = (data) => {
    setExpData(data);
    localStorage.setItem("expData", JSON.stringify(data));
  };

  const addEduForm = () => {
    setEduData([...eduData, {}]);
  };

  useEffect(() => {
    const savedInfoData = localStorage.getItem("infoData");
    const savedEduData = localStorage.getItem("eduData");
    const savedExpData = localStorage.getItem("expData");

    if (savedInfoData) setInfoData(JSON.parse(savedInfoData));
    if (savedEduData) setEduData(JSON.parse(savedEduData) || []);
    else setEduData([]);
    if (savedExpData) setExpData(JSON.parse(savedExpData));
  }, []);

  const combinedData = { ...infoData, eduData, ...expData };

  return (
    <>
      <Header />

      <div className="content">
        <div className="inputs">
          <Info onSubmit={handleInfoSubmit} />
          {console.log(eduData)}
          {eduData.map((edu, index) => (
            <Edu
              key={index}
              edu={edu}
              onSubmit={(data) => handleEduSubmit(data, index)}
            />
          ))}
          <button type="button" onClick={addEduForm}>
            Add Education
          </button>
          <Exp onSubmit={handleExpSubmit} />
        </div>
        <div className="main-form">
          <Body formData={combinedData} />
        </div>
      </div>
    </>
  );
}

export default App;
