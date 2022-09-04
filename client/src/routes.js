import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import {
  MAIN_PATH,
  PRODUCTS_PATH,
  CATALOG_PATH,
  ABOUT_PATH,
  DELIVERY_PATH,
  CART_PATH,
  ADMIN_PATH,
} from "./consts";

export const adminRoutes = [
  { path: ADMIN_PATH, Component: AdminPage },
];

export const authRoutes = [
];

export const publicRoutes = [
  { path: CATALOG_PATH, Component: CatalogPage },
  { path: DELIVERY_PATH, Component: DeliveryPage },
  { path: PRODUCTS_PATH + "/:id", Component: ProductPage },
  { path: CART_PATH, Component: CartPage },
  { path: MAIN_PATH, Component: MainPage },
  { path: ABOUT_PATH, Component: AboutUsPage },
];
