import React from "react";
import StyledModalOverlay from "./style";
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";

const ColorModal = () => {
  const dispatch = useDispatch();
  const { isColorModal, colorModalData } = useSelector((store) => store.app);

  const { id, name, year, color, pantone_value } = colorModalData;

  const handleClick = () => {
    dispatch(appSlice.setIsModal(false));
    dispatch(appSlice.setIsColorModal(false));
  };

  return (
    <StyledModalOverlay.Color showModal={isColorModal}>
      <header>
        <SlClose onClick={handleClick} />
        <p>quick view</p>
      </header>
      <div className="modal__data">
        <div>{name}</div>
        <div>Color: {color}</div>
        <div>Pantone: {pantone_value}</div>
        <div>Year: {year}</div>
        <div>ID: {id}</div>
      </div>
    </StyledModalOverlay.Color>
  );
};

export default ColorModal;
