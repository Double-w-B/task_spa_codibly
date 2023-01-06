import styled from "styled-components";

export const Search = styled.div`
  width: 100%;
  height: 12%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: ${(props) =>
    !props.isLoading &&
    !props.isHttpError &&
    "rgba(0, 0, 0, 0.1) 0px 1px 2px 0px"};
  border-radius: 0 0 4px 4px;

  label {
    width: 50%;
    padding-left: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-transform: capitalize;
    color: #97a5c8;
    transition: 0.3s linear;

    input {
      width: 75%;
      margin: 1rem 0 0 25%;
      padding: 0.2rem 0.5rem;
      border: 2px solid var(--primary-blue);
      border-radius: var(--border-radius);
      outline: none;
      color: var(--light-blue);
      transition: 0.3s linear;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
        rgba(0, 0, 0, 0.15) 0px 1px 3px -1px;
    }
  }

  .icons {
    width: 80px;
    height: 55%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: absolute;
    bottom: 0;
    right: 0.5rem;
    color: var(--light-grey);

    svg {
      font-size: 1.2rem;
      cursor: pointer;
      transition: 0.3s linear;

      &:first-child {
        color: ${(props) =>
          props.tableView ? "var(--primary-blue)" : "var(--light-blue)"};
      }
      &:last-child {
        color: ${(props) =>
          props.tableView ? "var(--light-blue)" : "var(--primary-blue)"};
      }
    }
  }

  @media screen and (max-width: 600px) {
    label input {
      width: 100%;
      margin: 1rem 0 0 0;
    }
  }
`;
