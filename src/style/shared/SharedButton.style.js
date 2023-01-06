import styled from "styled-components";

export const SharedButton = styled.button`
  padding: 0.5rem;
  outline: none;
  border: none;
  border-radius: var(--border-radius);
  color: #fff;
  cursor: pointer;
  transition: 0.3s linear;
  background-color: var(--primary-blue);
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 1px;

  &:active {
    transform: scale(0.85);
  }
`;
