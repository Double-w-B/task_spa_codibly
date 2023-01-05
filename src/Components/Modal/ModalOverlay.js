import React from "react";
import { useSelector } from "react-redux";
import StyledModalOverlay from "./style/index";

const ModalOverlay = (props) => {
  const { isModal } = useSelector((store) => store.app);
  return (
    <StyledModalOverlay showModal={isModal}>
      {props.children}
    </StyledModalOverlay>
  );
};

export default ModalOverlay;
