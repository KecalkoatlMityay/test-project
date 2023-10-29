import User from "../../components/User/User";
import Users from "../../components/Users/Users";
import { Layout } from "../ui-kit/layout/Layout";

export const routes = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Users />,
      },
      {
        path: "/:userId",
        element: <User />,
      },
      {
        path: "*",
        element: <div>Not found</div>,
      },
    ],
  },
];
