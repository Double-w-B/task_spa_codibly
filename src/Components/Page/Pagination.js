import React from "react";
import StyledHomePage from "./style";
import { useDispatch, useSelector } from "react-redux";
import * as appSlice from "../../redux/features/appSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

const Pagination = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { currentPage, searchQuery } = useSelector((store) => store.app);
  const { colorsPages, isColorsLoading, isHttpError } = useSelector(
    (store) => store.colors
  );

  const [isLoading, setIsLoading] = React.useState(true);

  const handlePrevButton = () => {
    if (currentPage <= 1 || currentPage > colorsPages.length) return;
    if (location.pathname.split("/").includes("colors")) return;

    dispatch(appSlice.setCurrentPage(currentPage - 1));
    navigate(`/pages/${currentPage - 1}`);
  };

  const handleNextButton = () => {
    if (currentPage >= colorsPages.length) return;
    if (location.pathname.split("/").includes("colors")) return;

    dispatch(appSlice.setCurrentPage(currentPage + 1));
    navigate(`/pages/${currentPage + 1}`);
  };

  const handlePageClick = (index) => {
    dispatch(appSlice.setSearchQuery(""));
    dispatch(appSlice.setCurrentPage(index + 1));
    navigate(`/pages/${index + 1}`);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  if (isLoading || isHttpError) {
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
              onClick={() => handlePageClick(index)}
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
