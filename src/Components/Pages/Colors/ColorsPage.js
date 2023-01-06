import React from "react";
import * as Component from "./index";
import Error from "../../Error/Error";
import StyledColorsPage from "./style";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import spinner from "../../../assets/loadingSpinner.gif";
import httpError from "../../../assets/http-error.png";
import * as appSlice from "../../../redux/features/appSlice";

const ColorsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { colorsPages, isColorsLoading, isHttpError, httpErrorStatus } =
    useSelector((store) => store.colors);
  const { isError } = useSelector((store) => store.app);

  const [isLoading, setIsLoading] = React.useState(true);

  const currentRoute = location.pathname.split("/");
  const isColorInRoute = currentRoute.includes("colors");
  const page = isColorInRoute ? 1 : currentRoute.at(-1);
  const colorId = isColorInRoute ? currentRoute.at(-1) : "";
  const isPageNumber = /^[0-9]+$/.test(+page);
  const isColorIdNumber = /^[0-9]+$/.test(+colorId);

  const initialState = {
    isLoading,
    isHttpError,
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isColorsLoading]);

  React.useEffect(() => {
    if (isPageNumber) {
      isColorIdNumber && dispatch(appSlice.setSearchQuery(colorId));
      dispatch(appSlice.setCurrentPage(+page));
    } else {
      dispatch(appSlice.setIsError(true));
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  React.useEffect(() => {
    if (!isLoading) {
      if (colorsPages.length > 0 && +page > colorsPages.length) {
        dispatch(appSlice.setIsError(true));
      }
      if (!isColorIdNumber) dispatch(appSlice.setIsError(true));
    }
    // eslint-disable-next-line
  }, [isLoading]);

  if (isLoading) {
    <main>
      <StyledColorsPage>
        <Component.Table>
          <img src={spinner} alt="" draggable={false} />
        </Component.Table>
      </StyledColorsPage>
    </main>;
  }

  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  if (isHttpError) {
    return (
      <main>
        <StyledColorsPage>
          <Component.Search />
          <StyledColorsPage.Table {...initialState}>
            <div className="error">
              <img src={httpError} alt="" draggable={false} />
              <p>{httpErrorStatus} Error</p>
              <p>Try again or come back later</p>
              <StyledColorsPage.Button onClick={() => window.location.reload()}>
                Try Again
              </StyledColorsPage.Button>
            </div>
          </StyledColorsPage.Table>
        </StyledColorsPage>
      </main>
    );
  }

  return (
    <main>
      <StyledColorsPage>
        <Component.Search />
        <Component.Table />
        <Component.Pagination />
      </StyledColorsPage>
    </main>
  );
};

export default ColorsPage;
