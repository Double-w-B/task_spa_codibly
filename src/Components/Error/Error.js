import React from "react";
import StyledError from "./style";
import { useDispatch, useSelector } from "react-redux";
import errorImg from "../../assets/404-error.webp";
import { useNavigate } from "react-router-dom";
import { setIsError } from "../../redux/features/appSlice";

const Error = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentPage } = useSelector((store) => store.app);
  const page = currentPage || 1;

  const handleButtonClick = () => {
    navigate(`/pages/${page}`);
    dispatch(setIsError(false));
  };

  return (
    <StyledError>
      <div className="img__container no-select">
        <img src={errorImg} alt="" draggable="false" />
      </div>
      <p>Page you're looking for doesn't exist</p>
      <StyledError.Button onClick={handleButtonClick}>
        Back to Colors
      </StyledError.Button>
    </StyledError>
  );
};

export default Error;
