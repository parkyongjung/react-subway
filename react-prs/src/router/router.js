import React, { createRef } from "react";
import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Main from "../page/main/Main";
import About from "../page/about/About";
import Notice from "../page/notice/Notice";

export const routes = [
  {
    path: "/",
    name: "Main",
    element: <Main />,
    nodeRef: createRef(),
  },
  {
    path: "/about",
    name: "About",
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: "/notice",
    name: "Notice",
    element: <Notice />,
    nodeRef: createRef(),
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map((route) => ({
      index: route.path === "/",
      path: route.path === "/" ? undefined : route.path,
      element: route.element,
    })),
  },
]);
