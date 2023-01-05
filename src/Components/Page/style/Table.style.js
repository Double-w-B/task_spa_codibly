import styled from "styled-components";

export const Table = styled.article`
  width: 100%;
  height: 78%;
  /* border: 2px solid #a2a7c1; */
  border-radius: 4px;
  padding: 1rem 0.5rem;
  display: grid;
  place-items: ${(props) =>
    (props.isLoading || props.noResults || props.isError) && "center"};

  grid-gap: 0.5rem;
  grid-template-columns: ${(props) =>
    !props.tableView &&
    !props.isLoading &&
    !props.noResults &&
    !props.isError &&
    "repeat(2, minmax(100px, 1fr))"};
  grid-template-rows: ${(props) =>
    props.tableView &&
    !props.isLoading &&
    !props.noResults &&
    !props.isError &&
    "repeat(5, minmax(96px, 1fr))"};

  p.errorMsg {
    font-size: 2rem;
    text-align: center;
    color: #a2a7c1;

    span {
      color: #698aff;
    }
  }

  div.error {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;

    p {
      color: #a2a7c1;

      &:first-of-type {
        font-size: 1.8rem;
      }

      &:last-of-type {
        font-size: 1.4rem;
      }
    }
    button {
      padding: 0.5rem;
      outline: none;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      transition: 0.3s linear;
      background-color: #698aff;

      &:active {
        transform: scale(0.85);
      }
    }
  }

  div:not(.error) {
    max-height: ${(props) => !props.tableView && "166px"};
    cursor: pointer;
    border-radius: 4px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.15s linear;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    p {
      color: #505050;

      &:first-child {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        text-transform: capitalize;
      }

      &:nth-child(2) {
        margin-top: 0.5rem;
      }
    }

    &:hover {
    }

    &:active {
      transform: scale(0.98);
    }

    .colorID {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.8rem;
    }
  }
`;
