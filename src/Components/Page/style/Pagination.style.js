import styled from "styled-components";

export const Pagination = styled.div`
  width: 100%;
  height: 10%;
  padding: 0 7rem;
  display: flex;
  align-items: center;
  justify-content: space-around;

  svg {
    font-size: 3rem;
    cursor: pointer;
    color: var(--light-blue);

    &:active {
      transform: scale(0.98);
    }
  }

  .pages {
    font-size: 1.3rem;
    width: 35%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .page {
      width: 38px;
      height: 38px;
      border: 2px solid var(--light-grey);
      border-radius: 50%;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: 0.3s linear;
      color: var(--light-grey);

      &.active {
        color: #fff;
        background-color: var(--primary-blue);
        border-radius: var(--border-radius);
        border: none;
      }

      &:hover {
        border-radius: 5px;
      }
    }
  }
`;
