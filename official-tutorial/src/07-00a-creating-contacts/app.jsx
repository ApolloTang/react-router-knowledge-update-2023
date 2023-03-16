import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from "react-router-dom"

import "./index.css"

import Root, {
  loader as rootLoader,
  action as rootAction
} from "./routes/root"
import Contact from "./routes/contact"
import ErrorPage from "./error-page"

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ]
  },
]

// const routes = createRoutesFromElements(
//   <>
//     <Route
//       element={<Root/>}
//       errorElement={<ErrorPage/>}
//       path="/"
//     />
//     <Route
//       element={<Contact/>}
//       path="/contacts/:contactid"
//     />
//   </>
// )

const router = createBrowserRouter(routes)

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export { App }
