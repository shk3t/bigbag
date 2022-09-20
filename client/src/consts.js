// Host
export const BASE_URL = "http://127.0.0.1:8000";
//export const BASE_URL = "http://91.203.193.225";

// Data
export const POLY_BAG = "Мешки полипропиленовые";
export const BIG_BAG = "МКР (биг-бэг)";
export const POLY_BAG_TYPE = "Типы полипропиленовых мешков";
export const BIG_BAG_TYPE = "Типы МКР";
export const USERS = "users";
export const BAG_TYPE_MAPPING = {};
BAG_TYPE_MAPPING[POLY_BAG_TYPE] = POLY_BAG;
BAG_TYPE_MAPPING[BIG_BAG_TYPE] = BIG_BAG;

// Routes
export const MAIN_PATH = "/main";
export const CATALOG_PATH = "/catalog";
export const ABOUT_PATH = "/about";
export const DELIVERY_PATH = "/delivery";
export const CART_PATH = "/cart";
export const AUTH_PATH = "/auth";
export const ADMIN_PATH = "/admin";

// Request reducers
export const CALL_REQUEST = "callRequestReducer";
export const CART_REQUEST = "cartRequestReducer";
export const AUTH_REQUEST = "authRequestReducer";
export const ADMIN_REQUEST = "adminRequestReducer";

// Translations
export const TRANSLATIONS = {
  email: "Эл. почта",
  password: "Пароль",
  type: "Тип продукта",
  image: "Изображение",
  price: "Цена",
  price_on_request: "Цена по запросу",
  in_stock: "В наличии",
  new: "Новинка",
  sale: "Акция",
  subtype: "Тип мешка",
  size: "Размер",
  tag: "Метка",
  color: "Цвет",
  poly_grade: "Сорт",
  bag_weight: "Вес мешка",
  weight_error: "Погрешность веса",
  items_per_pack: "Кол-во в упаковке",
  top_modification: "Верхняя модификация",
  bottom_modification: "Нижняя модификация",
  pack_size: "Размер упаковки",
  pack_volume: "Объем упаковки",
  name: "Название"
};
