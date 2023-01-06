import React from "react";
import StyledModalOverlay from "./style";
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";

const ColorModal = () => {
  const dispatch = useDispatch();
  const { isColorModal, colorModalData } = useSelector((store) => store.app);

  const { id, name, year, color, pantone_value } = colorModalData;
  const [isCopied, setIsCopied] = React.useState(false);

  const initialState = {
    showModal: isColorModal,
    color,
    isCopied,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 750);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleCloseButton = () => {
    dispatch(appSlice.setIsModal(false));
    dispatch(appSlice.setIsColorModal(false));
  };
  const handleHEXClick = () => {
    navigator.clipboard.writeText(color);
    setIsCopied(true);
  };

  return (
    <StyledModalOverlay.Color {...initialState}>
      <header>
        <div className="modal__button-close">
          <SlClose onClick={handleCloseButton} />
        </div>
        <p>quick view</p>
      </header>

      <div className="modal__color">
        <p>{name}</p>
        <p onClick={handleHEXClick}>{color}</p>
        <p>copied!</p>
      </div>

      <div className="modal__data">
        <p>
          pantone<sup>&#174;</sup>
        </p>
        <p>{pantone_value}</p>
        <p>{year}</p>
        <p>ID: {id}</p>
      </div>
    </StyledModalOverlay.Color>
  );
};

export default ColorModal;
