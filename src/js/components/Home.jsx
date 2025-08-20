import React, { useState } from "react";

const Semaforo = () => {
  const [activeLight, setActiveLight] = useState(null);

  const handleClick = (color) => {
    setActiveLight(color);
  };

  return (
	<div className="screen-center">
     <div className="traffic-container">
      <div
        className={`light red ${activeLight === "red" ? "active" : ""}`}
        onClick={() => handleClick("red")}
      ></div>
      <div
        className={`light yellow ${activeLight === "yellow" ? "active" : ""}`}
        onClick={() => handleClick("yellow")}
      ></div>
      <div
        className={`light green ${activeLight === "green" ? "active" : ""}`}
        onClick={() => handleClick("green")}
      ></div>
	  </div>
    </div>
  );
};

export default Semaforo;