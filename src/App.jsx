import React from "react";
import { Route, Routes } from "react-router-dom";
import { MenuClimaApp } from "./components/MenuClimaApp";
import { ClimaContextProvider } from "./context/ClimaContext";
import { Footer } from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

import "./App.css";

export const App = () => {
  return (
    <>
      <main>
        <h1>ClimaApp < FontAwesomeIcon icon={ faCloud } /></h1>
        <ClimaContextProvider>
          <Routes>
            <Route path="*" element={<MenuClimaApp />} />
          </Routes>
        </ClimaContextProvider>
      </main>
      <Footer />
    </>
  );
};
