import React from "react";
import StyledError from "./style";
import errorImg from "../../assets/404-error.webp";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <StyledError>
      <div className="img__container">
        <img src={errorImg} alt="" />
      </div>
      <p>Page you're looking for doesn't exist</p>
      <button onClick={handleButtonClick}>Return</button>
    </StyledError>
  );
};

export default Error;
