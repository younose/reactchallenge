import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NewPlayer from "./Component/NewPlayer";
import Navbar from "./Component/Navbar";
import EditPlayer from "./Component/EditPlayer/EditPlayer";
import Search from "./Component/Search";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <NewPlayer /> },
    { path: "edit", element: <EditPlayer /> },
    { path: "search", element: <Search /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <Router>
      <Navbar />
      <App />
    </Router>
  );
};

export default AppWrapper;
