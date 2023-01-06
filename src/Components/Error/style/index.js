import styled from "styled-components";

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
  }

  .img__container {
    width: 50%;
    height: 50%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  button {
    margin-top: 5rem;
    padding: 0.5rem;
    outline: none;
    border: none;
    border-radius: var(--border-radius);
    color: #fff;
    cursor: pointer;
    transition: 0.3s linear;
    background-color: var(--primary-blue);

    &:active {
      transform: scale(0.85);
    }
  }
`;

export default StyledError;
