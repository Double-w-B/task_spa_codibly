import styled from "styled-components";

export const Table = styled.article`
  width: 100%;
  height: 78%;
  border-radius: var(--border-radius);
  padding: 1rem 0.5rem;
  display: grid;
  grid-gap: 0.5rem;
  place-items: ${(props) =>
    (props.isLoading || props.noResults || props.isHttpError) && "center"};
  grid-template-columns: ${(props) =>
    !props.tableView &&
    !props.isLoading &&
    !props.noResults &&
    !props.isHttpError &&
    "repeat(2, minmax(100px, 1fr))"};
  grid-template-rows: ${(props) =>
    props.tableView &&
    !props.isLoading &&
    !props.noResults &&
    !props.isHttpError &&
    "repeat(5, minmax(96px, 1fr))"};

  p.errorMsg {
    font-size: 2rem;
    text-align: center;
    color: var(--light-grey);

    span {
      color: var(--primary-blue);
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
      color: var(--light-grey);

      &:first-of-type {
        font-size: 1.8rem;
      }

      &:last-of-type {
        font-size: 1.4rem;
      }
    }
  }

  div:not(.error) {
    max-height: ${(props) => !props.tableView && "166px"};
    cursor: pointer;
    border-radius: var(--border-radius);
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s linear;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

    p {
      color: #505050;
      transition: all 0.2s linear;

      &:first-child {
        font-size: 2rem;
        font-weight: bold;
        color: #fff;
        text-transform: capitalize;
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.2);
      }

      &:nth-child(2) {
        margin-top: 0.5rem;
      }
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
        rgba(0, 0, 0, 0.6) 0px 7px 13px -3px,
        rgba(0, 0, 0, 0.35) 0px -3px 0px inset;

      p:first-child {
        text-shadow: 2px 3px 0px rgba(0, 0, 0, 0.2);
      }
    }

    &:active {
      transform: scale(0.98);
    }

    .colorID {
      position: absolute;
      top: 0.5rem;
      right: 0.5rem;
      font-size: 0.8rem;
      color: rgba(255, 255, 255, 0.5);
    }
  }

  @media screen and (max-width: 700px) {
    div:not(.error) p:first-child {
      font-size: 1.8rem;
    }
  }
  @media screen and (max-width: 600px) {
    div:not(.error) p:first-child {
      font-size: 1.6rem;
    }
  }
  @media screen and (max-width: 500px) {
    div:not(.error) p:first-child {
      font-size: 1.45rem;
    }
  }
`;
