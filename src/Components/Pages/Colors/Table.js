import React from "react";
import StyledColorsPage from "./style";
import SingleColor from "./SingleColor";
import { useSelector } from "react-redux";
import spinner from "../../../assets/loadingSpinner.gif";

const Table = () => {
  const { colorsPages, isColorsLoading, colors, isHttpError } = useSelector(
    (store) => store.colors
  );
  const { currentPage, tableView, searchQuery } = useSelector(
    (store) => store.app
  );
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
    }, 1800);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  React.useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (isLoading) {
    return (
      <StyledColorsPage.Table {...initialState}>
        <img src={spinner} alt="" draggable={false} />
      </StyledColorsPage.Table>
    );
  }

  const filteredSearch = colors.filter((color) => color.id === +searchQuery);
  const pageColors = colorsPages.slice(currentPage - 1, currentPage).flat();

  const list = searchQuery ? filteredSearch : pageColors;
  const noResults = list.length === 0;

  return (
    <StyledColorsPage.Table {...initialState} noResults={noResults}>
      {noResults && (
        <p className="errorMsg">
          There is no color with ID: <br />
          <span>{searchQuery}</span>
        </p>
      )}
      {!noResults &&
        list.map((color, index) => <SingleColor key={index} {...color} />)}
    </StyledColorsPage.Table>
  );
};

export default Table;
