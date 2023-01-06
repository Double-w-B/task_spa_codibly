import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 6vh;
  display: grid;
  place-items: center;

  p {
    font-size: 0.7rem;
    color: var(--light-grey);

    a {
      font-size: 1rem;
      color: var(--primary-blue);
    }
  }
`;

export default StyledFooter;
