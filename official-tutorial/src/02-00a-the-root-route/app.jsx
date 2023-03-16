import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import "./index.css"

import Root from "./routes/root"

const routeObject = {
  path: "/",
  element: <div>Hello world!</div>,
}
// const routes = [ routeObject ]

const routes = createRoutesFromElements(
  <Route
    element={<Root/>}
    path="/"
  />
)

const router = createBrowserRouter(routes)

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export { App }
