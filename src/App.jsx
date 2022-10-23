import React from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </>
  );
};

export default App;
