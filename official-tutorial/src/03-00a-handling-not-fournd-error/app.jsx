import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import "./index.css"

import Root from "./routes/root"
import ErrorPage from "./error-page"

const routeObject = {
  path: "/",
  element: <Root />,
  // errorElement: <ErrorPage />,
}
const routes = [ routeObject ]

// const routes = createRoutesFromElements(
//   <Route
//     element={<Root/>}
//     errorElement={<ErrorPage/>}
//     path="/"
//   />
// )

const router = createBrowserRouter(routes)

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export { App }
