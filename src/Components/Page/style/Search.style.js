import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  height: 12%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;

  label {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-transform: capitalize;
    color: #97a5c8;

    input {
      width: 75%;
      margin-top: 1rem;
      margin-left: 25%;
      border: 2px solid #a2a7c1;
      border-radius: 4px;
      outline: none;
      padding-left: 0.5rem;
    }
  }

  .icons {
    width: 80px;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #a2a7c1;

    svg {
      font-size: 1.2rem;
      cursor: pointer;
      transform: translateY(3px);
      transition: 0.3s linear;

      &:first-child {
        color: ${(props) => (props.isList ? "#698aff" : "#97a5c8")};
      }
      &:last-child {
        color: ${(props) => (props.isList ? "#97a5c8" : "#698aff")};
      }
    }
  }
`;
