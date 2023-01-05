import React from "react";
import StyledHomePage from "./style";
import { FaThList, FaTable } from "react-icons/fa";

const Search = () => {
  const [query, setQuery] = React.useState("");

  return (
    <StyledHomePage.Search>
      <label htmlFor="search">
        Search for:
        <input
          id="search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value.replace(/[^0-9.]/g, ""))}
        />
      </label>
      <div className="icons">
        <FaThList />
        |
        <FaTable />
      </div>
    </StyledHomePage.Search>
  );
};

export default Search;
