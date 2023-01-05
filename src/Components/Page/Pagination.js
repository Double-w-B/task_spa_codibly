import React from "react";
import StyledHomePage from "./style";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Pagination = () => {
  return (
    <StyledHomePage.Pagination>
      <CiCircleChevLeft />
      <div className="pages">
        <div className="page active">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
      </div>
      <CiCircleChevRight />
    </StyledHomePage.Pagination>
  );
};

export default Pagination;
