import styled from "styled-components";
import { SharedButton } from "../../../style/shared/SharedButton.style";

const StyledError = styled.section`
  width: 100vw;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--light-grey);
    transition: 0.3s linear;
  }

  .img__container {
    width: 50%;
    min-width: 768px;
    height: 60%;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
      object-position: bottom;
    }
  }

  @media screen and (max-width: 768px) {
    .img__container {
      width: 90%;
      min-width: initial;
    }
  }
  @media screen and (max-width: 600px) {
    p {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 500px) {
    p {
      font-size: 1.35rem;
    }
  }
`;

const Button = styled(SharedButton)`
  margin-top: 5rem;
`;

StyledError.Button = Button;

export default StyledError;
