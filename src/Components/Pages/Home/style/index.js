import styled from "styled-components";
import { SharedButton } from "../../../../style/shared/SharedButton.style";

const StyledHomePage = styled.section`
  width: 100vw;
  height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  .info {
    width: 40%;
    min-width: 550px;
    height: 75%;
    min-height: 470px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: 0.3s linear;

    h1 {
      text-align: center;
      margin: 0;
      text-transform: capitalize;
      color: var(--primary-blue);
    }
    h3 {
      text-align: center;

      color: var(--light-grey);
    }

    p {
      text-align: justify;
      line-height: 1.5;
      color: var(--light-blue);
    }
  }

  .illustration {
    width: 25%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;

    img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 1000px) {
    .illustration {
      width: 100%;
      height: 100%;
      opacity: 0.07;
    }
  }
  @media screen and (max-width: 600px) {
    .info {
      width: 90%;
      min-width: initial;
      height: 90%;
      min-height: initial;
      line-height: 1.35;
    }
  }
  @media screen and (max-width: 490px) {
    .info {
      justify-content: space-between;
    }
  }
`;

StyledHomePage.Button = SharedButton;

export default StyledHomePage;
