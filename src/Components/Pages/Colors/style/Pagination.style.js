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
    color: var(--primary-blue);
    transition: 0.3s linear;

    &:active {
      transform: scale(0.8);
    }
  }

  .pages {
    font-size: 1.3rem;
    width: 35%;
    min-width: 190px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .page {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: 0.3s linear;
      color: var(--light-grey);
      box-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px 0px;

      &.active {
        color: #fff;
        background-color: var(--primary-blue);
        border-radius: var(--border-radius);
        border: none;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 1px;
      }

      &:hover {
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 1px;
      }
    }
  }

  @media screen and (max-width: 700px) {
    padding: 0 4rem;
  }
  @media screen and (max-width: 600px) {
    padding: 0 2rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0;
  }
`;
