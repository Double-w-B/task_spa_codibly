import React from "react";
import StyledFooter from "./style";

const Footer = () => {
  return (
    <StyledFooter className="no-select">
      <p>
        made by{" "}
        <a
          href="https://github.com/Double-w-B"
          target="_blank"
          rel="noopener noreferrer"
        >
          Władysław Balandin
        </a>
      </p>
    </StyledFooter>
  );
};

export default Footer;
