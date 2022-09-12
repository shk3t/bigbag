import ProductPage from "./pages/ProductPage";
import CatalogPage from "./pages/CatalogPage";
import MainPage from "./pages/MainPage";
import AboutUsPage from "./pages/AboutUsPage";
import DeliveryPage from "./pages/DeliveryPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import {
  MAIN_PATH,
  CATALOG_PATH,
  ABOUT_PATH,
  DELIVERY_PATH,
  CART_PATH,
  ADMIN_PATH,
} from "./consts";

export const adminRoutes = [{ path: ADMIN_PATH, Component: AdminPage, title: "Админ панель"}];

export const authRoutes = [];

export const publicRoutes = [
  { path: CATALOG_PATH, Component: CatalogPage, title: "Каталог" },
  { path: CATALOG_PATH + "/:id", Component: ProductPage, title: "Каталог" },
  { path: DELIVERY_PATH, Component: DeliveryPage, title: "Доставка" },
  { path: CART_PATH, Component: CartPage, title: "Корзина" },
  { path: MAIN_PATH, Component: MainPage, title: "Главная" },
  { path: ABOUT_PATH, Component: AboutUsPage, title: "О нас" },
];

export const allRoutes = [...adminRoutes, ...authRoutes, ...publicRoutes];
