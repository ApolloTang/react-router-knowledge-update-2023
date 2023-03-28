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
  loader as contactLoader,
  action as contactAction
} from "./routes/contact"
import EditContact,  {
  action as editAction
} from "./routes/edit"
import { action as destroyAction } from "./routes/destroy"
import ErrorPage from "./error-page"
import Index from "~/routes/index"

const routes_notused = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        // This is a path less child
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />
          },
          {
            path: "contacts/:contactId",
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
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
      }
    ]
  },
]

const routes = createRoutesFromElements(
  <>
    <Route
      path="/"
      element={<Root/>}
      errorElement={<ErrorPage/>}
      loader={rootLoader}
      action={rootAction}
    >
      <Route errorElement={<ErrorPage/>} >
        <Route
          index
          element={<Index/>}
        />
      <Route
        path={"contacts/:contactId"}
        element={<Contact />}
        loader={contactLoader}
        action={contactAction}
      />
      <Route
        path={"contacts/:contactId/edit"}
        element={<EditContact />}
        loader={contactLoader}
        action={editAction}
      />
      <Route
        path={"contacts/:contactId/destroy"}
        action={destroyAction}
      />
      </Route>
    </Route>
  </>
)

const router = createBrowserRouter(routes)

const App = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

export { App }
