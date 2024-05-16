import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Mainpage />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
