import styled from "styled-components";

export const Table = styled.article`
  width: 100%;
  height: 78%;
  border: 2px solid #a2a7c1;
  border-radius: 4px;
  padding: 1rem 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: ${(props) =>
    props.isList && "repeat(2, minmax(100px, 1fr))"};
  grid-template-rows: ${(props) =>
    !props.isList && "repeat(auto-fit, minmax(1fr))"};

  div:nth-child(even) {
    background-color: seagreen;
  }

  div:nth-child(odd) {
    background-color: tomato;
  }
`;
