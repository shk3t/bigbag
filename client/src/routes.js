import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import MyCartPage from "./pages/MyCartPage";

// Вынес константы из utils/consts.js потому что так удобнее)) (Удалить После Прочтения)
export const MAIN_PATH = "/main";
export const PRODUCTS_PATH = "/products";
export const CATALOG_PATH = "/catalog";
export const ABOUT_PATH = "/about";
export const DELIVERY_PATH = "/delivery";
export const CART_PATH = "/cart";

export const publicRoutes = [
  {
    path: PRODUCTS_PATH + "/:id",
    Component: ProductPage,
  },
  {
    path: CATALOG_PATH,
    Component: CatalogPage,
  },
  {
    path: MAIN_PATH,
    Component: MainPage,
  },
  {
    path: ABOUT_PATH,
    Component: AboutUsPage,
  },
  {
    path: DELIVERY_PATH,
    Component: DeliveryPage,
  },
  {
    path: CART_PATH,
    Component: MyCartPage,
  },
];
