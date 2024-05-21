import React from "react";
import { Route, Routes } from "react-router-dom";
import Mainpage from "./components/Mainpage";
import Login from "./components/Login";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Mainpage />}/> */}
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
