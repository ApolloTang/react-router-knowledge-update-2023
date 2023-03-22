import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import "./index.css"

import Root, {
  loader as rootLoader,
  action as rootAction
} from "./routes/root"

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <div>opps!</div>,
    loader: rootLoader,
    action: rootAction,
  },
]

const router = createBrowserRouter(routes)

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export { App }
