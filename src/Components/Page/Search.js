import React from "react";
import StyledHomePage from "./style";
import { FaThList, FaTable } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";
import { setSearchQuery } from "../../redux/features/appSlice";

const Search = () => {
  const dispatch = useDispatch();
  const { tableView, searchQuery } = useSelector((store) => store.app);
  const { isColorsLoading, isError } = useSelector((store) => store.colors);

  const [isLoading, setIsLoading] = React.useState(true);

  const isTableViewList = tableView === "list";

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, "");
    console.log(value);
    dispatch(setSearchQuery(value));
  };

  if (isLoading || isError) {
    return <StyledHomePage.Search />;
  }

  return (
    <StyledHomePage.Search tableView={isTableViewList}>
      <label htmlFor="search">
        Search by ID:
        <input
          id="search"
          type="text"
          value={searchQuery}
          onChange={handleInputChange}
        />
      </label>
      <div className="icons">
        <FaThList onClick={() => dispatch(appSlice.changeTableView("list"))} />
        |
        <FaTable onClick={() => dispatch(appSlice.changeTableView("table"))} />
      </div>
    </StyledHomePage.Search>
  );
};

export default Search;
