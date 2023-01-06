import React from "react";
import StyledHomePage from "./style";
import { FaThList, FaTable } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { tableView, searchQuery, currentPage } = useSelector(
    (store) => store.app
  );
  const { isColorsLoading, isHttpError } = useSelector((store) => store.colors);

  const [isLoading, setIsLoading] = React.useState(true);

  const isTableViewList = tableView === "list";

  const initialState = {
    isLoading,
    isHttpError,
    tableView: isTableViewList,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  const handleInputChange = (e) => {
    if (/[^0-9.]/.test(e.target.value)) return;
    // const value = e.target.value.replace(/[^0-9.]/g, "");
    const value = e.target.value;

    if (value) {
      dispatch(appSlice.setSearchQuery(value));
      navigate(`/colors/${value}`);
    } else {
      console.log(currentPage);
      dispatch(appSlice.setSearchQuery(""));

      navigate(`/pages/${currentPage}`);
    }
  };

  if (isLoading || isHttpError) {
    return <StyledHomePage.Search {...initialState} />;
  }

  return (
    <StyledHomePage.Search {...initialState}>
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
