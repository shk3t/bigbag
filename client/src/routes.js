import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import CartPage from "./pages/CartPage";
import AuthPage from "./pages/AuthPage";
import Admin from "./pages/Admin";

export const MAIN_PATH = "/main";
export const PRODUCTS_PATH = "/products";
export const CATALOG_PATH = "/catalog";
export const ABOUT_PATH = "/about";
export const DELIVERY_PATH = "/delivery";
export const CART_PATH = "/cart";
export const AUTH_PATH = "/auth";
export const REGISTRATION_PATH = "/registration";
export const LOGIN_PATH = "/login";
export const ADMIN_PATH = "/admin";

export const privateRoutes = [
  //   !!!! Временно вынесла Корзину в public Routes, пока делаю стили. Затем раскомментить
  //   {
  //     path: CART_PATH,
  //     Component: CartPage,
  //   },
  //   временно вынесла в publicRoutes, пока делаю стили
  //   {
  //     path: ADMIN_PATH,
  //     Component: Admin,
  //   },
];

export const publicRoutes = [
  {
    path: ADMIN_PATH,
    Component: Admin,
  },
  {
    path: CART_PATH,
    Component: CartPage,
  },

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
    path: AUTH_PATH,
    Component: AuthPage,
  },

  {
    path: LOGIN_PATH,
    Component: AuthPage,
  },
  {
    path: REGISTRATION_PATH,
    Component: AuthPage,
  },
];
