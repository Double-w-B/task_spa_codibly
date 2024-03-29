import React from "react";
import { useDispatch } from "react-redux";
import * as Component from "./Components";
import { getAllColors } from "./redux/features/colorsSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAllColors());
    // eslint-disable-next-line
  }, []);

  return (
    <Router>
      <Component.ModalOverlay>
        <Component.ColorModal />
      </Component.ModalOverlay>
      <Routes>
        <Route exact path="/" element={<Component.HomePage />} />
        <Route exact path="/pages/:page" element={<Component.ColorsPage />} />
        <Route
          exact
          path="/colors/:colorID"
          element={<Component.ColorsPage />}
        />
        <Route path="*" element={<Component.Error />} />
      </Routes>
      <Component.Footer />
    </Router>
  );
}

export default App;
