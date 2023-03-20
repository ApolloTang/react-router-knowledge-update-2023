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
import Contact, {
  loader as contactLoader
} from "./routes/contact"
import EditContact,  {
  action as editAction
} from "./routes/edit"
import { action as destroyAction } from "./routes/destroy"
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
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
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
