import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// const routes = [
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]

const routes = createRoutesFromElements(
  <Route
    element={<div>Hello world!</div>}
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
