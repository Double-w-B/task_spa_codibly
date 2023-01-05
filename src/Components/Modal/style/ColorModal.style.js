import styled from "styled-components";

export const Color = styled.div`
  width: 380px;
  height: 450px;
  border-radius: 4px;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  z-index: ${(props) => (props.showModal ? "10" : "-10")};
  background-color: #c3c3c3;

  header {
    width: 100%;
    height: 15%;
    border-radius: 4px 4px 0 0;
    background-color: #fff;
    position: relative;
    display: grid;
    align-items: center;

    p {
      font-size: 1.3rem;
      text-transform: capitalize;
      text-align: center;
    }

    svg {
      font-size: 1.5rem;
      position: absolute;
      top: 50%;
      left: 1rem;
      transform: translateY(-50%);
    }
  }

  .modal__data {
    width: 100%;
    height: 85%;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    div {
      width: 100%;
      height: calc(100% / 5.5);
      border-radius: 4px;
      background-color: tomato;
    }
  }
`;
