import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdviceGenerator = () => {
  const [advice, setAdvice] = useState({});

  const getAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="advice-generator">
      <p className="advice-id">ADVICE #{advice.id}</p>
      <p className="advice">"{advice.advice}"</p>
      <div className="advice-divider"></div>
      <button className="advice-btn" onClick={getAdvice}></button>
    </div>
  );
};

export default AdviceGenerator;
