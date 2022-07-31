import { MAIN_PAGE_ROUTE } from "./utils/consts";
import { PRODUCT_PAGE_ROUTE } from "./utils/consts";
import { CATALOG_PAGE_ROUTE } from "./utils/consts";
import { ABOUT_PAGE_ROUTE } from "./utils/consts";
import { DELIVERY_PAGE_ROUTE } from "./utils/consts";
import { CART_PAGE_ROUTE } from "./utils/consts";
import Product from "./components/Product";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import MyCartPage from "./pages/MyCartPage";

export const publicRoutes = [
  {
    path: PRODUCT_PAGE_ROUTE + "/:id",
    Component: Product,
  },
  {
    path: CATALOG_PAGE_ROUTE,
    Component: CatalogPage,
  },
  {
    path: MAIN_PAGE_ROUTE,
    Component: MainPage,
  },

  {
    path: ABOUT_PAGE_ROUTE,
    Component: AboutUsPage,
  },
  {
    path: DELIVERY_PAGE_ROUTE,
    Component: DeliveryPage,
  },
  {
    path: CART_PAGE_ROUTE,
    Component: MyCartPage,
  },
];
