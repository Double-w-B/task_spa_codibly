import styled from "styled-components";

export const Color = styled.div`
  width: 380px;
  height: 450px;
  padding: 0 1rem;
  border-radius: 8px;
  visibility: ${(props) => (props.showModal ? "visible" : "hidden")};
  opacity: ${(props) => (props.showModal ? "1" : "0")};
  z-index: ${(props) => (props.showModal ? "10" : "-10")};
  position: absolute;
  top: ${(props) => (props.showModal ? "50%" : "45%")};
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  transition: 0.3s linear;

  header {
    width: 100%;
    height: 15%;
    border-radius: 4px 4px 0 0;
    position: relative;
    display: grid;
    align-items: center;

    .modal__button-close {
      width: 47.5px;
      height: 100%;
      display: grid;
      align-items: center;
      position: absolute;
      top: 0;
      left: 0;

      svg {
        font-size: 1.6rem;
        color: var(--light-blue);
        cursor: pointer;
        transition: 0.2s ease-in;

        &:hover {
          color: var(--primary-blue);
        }

        &:active {
          transform: scale(0.8);
        }
      }
    }

    p {
      font-size: 1.3rem;
      text-transform: capitalize;
      text-align: center;
      color: var(--light-blue);
    }
  }

  .modal__color {
    width: 100%;
    height: 250px;
    background-color: ${(props) => props.color};
    border-radius: var(--border-radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 3px 0px inset,
      rgba(0, 0, 0, 0.1) 2px 0px 3px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -2px 3px 0px inset,
      rgba(0, 0, 0, 0.1) -2px 0px 3px 0px inset,
      rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
      rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

    p {
      transition: 0.2s linear;

      &:first-of-type {
        font-size: 2rem;
        text-transform: capitalize;
        color: #fff;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
        font-weight: bold;
      }

      &:nth-child(2) {
        font-size: 1.4rem;
        margin-top: 1rem;
        color: rgba(255, 255, 255, 0.5);
        cursor: pointer;
        transition: 0.15s linear;

        &:active {
          transform: scale(0.9);
        }

        &:hover + p {
          opacity: ${(props) => !props.isCopied && "1"};
          visibility: ${(props) => !props.isCopied && "visible"};
        }
      }

      &:last-of-type {
        color: rgba(255, 255, 255, 0.5);
        opacity: ${(props) => (props.isCopied ? "1" : "0")};
        visibility: ${(props) => (props.isCopied ? "visible" : "hidden")};
        position: absolute;
        bottom: 0.5rem;
        left: 50%;
        transform: translate(-50%);
      }
    }
  }

  .modal__data {
    width: 100%;
    height: calc(100% - 15% - 250px);
    padding: 1rem 0 1rem 0.5rem;
    position: relative;

    p {
      &:first-of-type {
        font-size: 2.2rem;
        margin-bottom: 0.2rem;
        text-transform: uppercase;
        font-weight: bold;
        letter-spacing: 0.5px;
        color: #000;
      }

      &:nth-child(3) {
        margin-top: 0.2rem;
      }

      &:last-of-type {
        font-size: 0.8rem;
        color: var(--light-grey);
        position: absolute;
        right: 0;
        bottom: 1rem;
      }
    }
  }
`;
