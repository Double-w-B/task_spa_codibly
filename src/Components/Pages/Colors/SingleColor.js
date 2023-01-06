import React from "react";
import StyledColorsPage from "./style";
import { useDispatch } from "react-redux";
import * as appSlice from "../../../redux/features/appSlice";

const SingleColor = (props) => {
  const { id, name, color, year } = props;

  const dispatch = useDispatch();

  const handleColorClick = () => {
    dispatch(appSlice.setIsModal(true));
    dispatch(appSlice.setIsColorModal(true));
    dispatch(appSlice.setColorModalData(props));
  };

  return (
    <StyledColorsPage.SingleColor onClick={handleColorClick} color={color}>
      <p>{name}</p>
      <p>{year}</p>
      <p className="colorID">ID: {id}</p>
    </StyledColorsPage.SingleColor>
  );
};

export default SingleColor;
