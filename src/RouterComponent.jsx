import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./root-layout/RootLayout.jsx";
import ErrorPage from "./error-page.jsx";
import Home from "./pages/Home/Home.jsx";
import RealEstateForSale from "./pages/RealEstate/Sale/Sale.jsx";
import RealEstateForRent from "./pages/RealEstate/Rent/Rent.jsx";
import RealEstateProjects from "./pages/RealEstateProjects/RealEstateProjects.jsx";
import PostingManagement from "./pages/PostingManagement/PostingManagement.jsx";
import ListPost from "./pages/PostingManagement/ListPost.jsx";
import ListDraftPost from "./pages/PostingManagement/ListDraftPost.jsx";
import RealEstateDetail from "./pages/RealEstateDetail/RealEstateDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        path: "/sale/:slug",
        element: <RealEstateForSale />,
      },
      {
        path: "/rent/:slug",
        element: <RealEstateForRent />,
      },
      {
        path: "/project/:slug",
        element: <RealEstateProjects />,
      },
      {
        path: "/detail/:slug",
        element: <RealEstateDetail />,
      },
      {
        path: "/quan-ly-dang-tin",
        element: <PostingManagement />,
      },
      {
        path: "/quan-ly-dang-tin/danh-sach",
        element: <ListPost />,
      },
      {
        path: "/quan-ly-dang-tin/danh-sach-nhap",
        element: <ListDraftPost />,
      },
    ],
  },
]);

const RouterComponent = () => <RouterProvider router={router} />;

export default RouterComponent;
