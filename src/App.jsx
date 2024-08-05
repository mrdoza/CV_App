import { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import Info from "./components/Info.jsx";

function App() {

  const [info, setInfo] = useState({
    name: "Your Name",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });
  
  return (
    <>
      <Header />
      <Info />
      <Body />
    </>
  );
}

export default App;
