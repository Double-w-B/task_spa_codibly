import React from "react";
import { useDispatch } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";

const SingleColor = (props) => {
  const { id, name, color, year } = props;

  const dispatch = useDispatch();

  const handleColorClick = () => {
    dispatch(appSlice.setIsModal(true));
    dispatch(appSlice.setIsColorModal(true));
    dispatch(appSlice.setColorModalData(props));
  };

  return (
    <div style={{ backgroundColor: color }} onClick={handleColorClick}>
      <p>{name}</p>
      <p>{year}</p>
      <p className="colorID">ID: {id}</p>
    </div>
  );
};

export default SingleColor;
