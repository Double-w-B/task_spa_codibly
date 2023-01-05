import React from "react";
import StyledHomePage from "./style";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../redux/features/appSlice";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Pagination = () => {
  const dispatch = useDispatch();
  const { colorsPages, isColorsLoading, isError } = useSelector(
    (store) => store.colors
  );
  const { currentPage, searchQuery } = useSelector((store) => store.app);
  const [isLoading, setIsLoading] = React.useState(true);

  const handlePrevButton = () => {
    if (currentPage === 1) return;
    dispatch(setCurrentPage(currentPage - 1));
  };

  const handleNextButton = () => {
    if (currentPage === colorsPages.length) return;
    dispatch(setCurrentPage(currentPage + 1));
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  if (isLoading || isError) {
    return <StyledHomePage.Pagination />;
  }

  return (
    <StyledHomePage.Pagination className="no-select">
      <CiCircleChevLeft onClick={handlePrevButton} />
      <div className="pages">
        {colorsPages.map((page, index) => {
          const setActive = () => {
            if (currentPage === index + 1 && !searchQuery) return "page active";
          };

          return (
            <div
              key={index}
              className={`page ${setActive()}`}
              onClick={() => dispatch(setCurrentPage(index + 1))}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
      <CiCircleChevRight onClick={handleNextButton} />
    </StyledHomePage.Pagination>
  );
};

export default Pagination;
