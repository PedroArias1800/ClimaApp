import React from "react";
import { Route, Routes } from "react-router-dom";
import { MenuClimaApp } from "./components/MenuClimaApp";
import { ClimaContextProvider } from "./context/ClimaContext";

export const App = () => {
  return (
    <div>
      <h1>ClimaApp</h1>
      <ClimaContextProvider>
        <Routes>
          <Route path="*" element={<MenuClimaApp />} />
        </Routes>
      </ClimaContextProvider>
    </div>
  );
};
