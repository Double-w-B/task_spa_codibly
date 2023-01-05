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
    color: #97a5c8;
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
      border: 2px solid #a2a7c1;
      border-radius: 50%;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: 0.3s linear;
      color: #a2a7c1;

      &.active {
        color: #fff;
        background-color: #698aff;
        border-radius: 4px;
        border: none;
      }

      &:hover {
        border-radius: 5px;
      }
    }
  }
`;
