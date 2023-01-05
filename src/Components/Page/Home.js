import React from "react";
import * as Component from "./index";
import StyledHomePage from "./style";

const Home = () => {
  return (
    <main>
      <StyledHomePage>
        <Component.Search />
        <Component.Table />
        <Component.Pagination />
      </StyledHomePage>
    </main>
  );
};

export default Home;
