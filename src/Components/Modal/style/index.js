import styled from "styled-components";
import { Color } from "./ColorModal.style";

const StyledModalOverlay = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  left: 0;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  z-index: ${(props) => (props.showModal ? "10" : "-10")};
  background-color: rgba(0, 0, 0, 0.7);
`;

StyledModalOverlay.Color = Color;

export default StyledModalOverlay;
