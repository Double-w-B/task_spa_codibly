import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  height: 6vh;
  display: grid;
  place-items: center;

  p {
    color: var(--light-grey);

    a {
      color: var(--primary-blue);
    }
  }
`;

export default StyledFooter;
