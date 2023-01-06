import React from "react";
import StyledError from "./style";
import { useDispatch } from "react-redux";
import errorImg from "../../assets/404-error.webp";
import { useNavigate, useLocation } from "react-router-dom";
import { setIsError } from "../../redux/features/appSlice";

const Error = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const currentRoute = location.pathname;
  const pagesRoute = currentRoute.split("/").slice(0, -1).join("/");

  const handleButtonClick = () => {
    navigate(`${pagesRoute}/${1}`);
    dispatch(setIsError(false));
  };

  return (
    <StyledError>
      <div className="img__container no-select">
        <img src={errorImg} alt="" draggable="false" />
      </div>
      <p>Page you're looking for doesn't exist</p>
      <button onClick={handleButtonClick}>Back to Pages</button>
    </StyledError>
  );
};

export default Error;
