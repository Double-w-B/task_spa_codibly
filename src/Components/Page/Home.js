import React from "react";
import Error from "../Error/Error";
import * as Component from "./index";
import StyledHomePage from "./style";
import { useLocation } from "react-router-dom";
import spinner from "../../assets/loadingSpinner.gif";
import { useDispatch, useSelector } from "react-redux";
import serverError from "../../assets/server-error.png";
import * as appSlice from "../../redux/features/appSlice";

const Home = () => {
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
      dispatch(appSlice.setSearchQuery(colorId));
      dispatch(appSlice.setCurrentPage(+page));
    } else {
      dispatch(appSlice.setIsError(true));
    }
    // eslint-disable-next-line
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      if (colorsPages.length > 0 && +page > colorsPages.length) {
        dispatch(appSlice.setIsError(true));
      }
    }
    // eslint-disable-next-line
  }, [isLoading]);

  if (isLoading) {
    <main>
      <StyledHomePage>
        <Component.Table>
          <img src={spinner} alt="" />
        </Component.Table>
      </StyledHomePage>
    </main>;
  }

  if (isError) {
    return <Error />;
  }

  if (isHttpError) {
    return (
      <StyledHomePage>
        <Component.Search />
        <StyledHomePage.Table {...initialState}>
          <div className="error">
            <img src={serverError} alt="" />
            <p>{httpErrorStatus} Error</p>
            <p>Try again or come back later</p>
            <button onClick={() => window.location.reload()}>Try Again</button>
          </div>
        </StyledHomePage.Table>
      </StyledHomePage>
    );
  }

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
