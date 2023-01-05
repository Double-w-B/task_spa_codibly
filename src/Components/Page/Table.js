import React from "react";
import StyledHomePage from "./style";
import SingleColor from "./SingleColor";
import { useSelector } from "react-redux";
import spinner from "../../assets/loadingSpinner.gif";
import serverError from "../../assets/server-error.png";

const Table = () => {
  const { colorsPages, isColorsLoading, colors, isError, httpErrorStatus } =
    useSelector((store) => store.colors);
  const { currentPage, tableView, searchQuery } = useSelector(
    (store) => store.app
  );
  const [isLoading, setIsLoading] = React.useState(true);
  const isTableViewList = tableView === "list";

  const initialState = {
    isLoading,
    isError,
    tableView: isTableViewList,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  React.useEffect(() => {
    if (searchQuery) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [searchQuery]);

  if (isError) {
    return (
      <StyledHomePage.Table {...initialState}>
        <div className="error">
          <img src={serverError} alt="" />
          <p>{httpErrorStatus} Error</p>
          <p>Try again or come back later</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </StyledHomePage.Table>
    );
  }

  if (isLoading) {
    return (
      <StyledHomePage.Table {...initialState}>
        <img src={spinner} alt="" />
      </StyledHomePage.Table>
    );
  }

  const filteredSearch = colors.filter((color) => color.id === +searchQuery);
  const pageColors = colorsPages.slice(currentPage - 1, currentPage).flat();

  const list = searchQuery ? filteredSearch : pageColors;
  const noResults = list.length === 0;

  return (
    <StyledHomePage.Table {...initialState} noResults={noResults}>
      {noResults && (
        <p className="errorMsg">
          There is no color with ID: <br />
          <span>{searchQuery}</span>
        </p>
      )}
      {!noResults &&
        list.map((color, index) => <SingleColor key={index} {...color} />)}
    </StyledHomePage.Table>
  );
};

export default Table;
