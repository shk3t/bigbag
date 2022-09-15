import {
  CART_PATH,
  AUTH_PATH,
  ADMIN_PATH,
  CALL_REQUEST,
  CART_REQUEST,
  AUTH_REQUEST,
  ADMIN_REQUEST,
} from "./consts";
import { store } from "./store";
import CallRequestForm from "./components/UI/Forms/CallRequestForm";
import CartRequestForm from "./components/UI/Forms/CartRequestForm";
import AuthForm from "./components/UI/Forms/AuthForm";
import AdminForms from "./components/UI/Forms/AdminForms";

const state = store.getState();

const modals = [
  {
    path: `^(?!${ADMIN_PATH}).*$`,
    active: state.callRequestReducer.modalActive,
    type: CALL_REQUEST,
    Child: CallRequestForm,
  },
  {
    path: CART_PATH,
    active: state.cartRequestReducer.modalActive,
    type: CART_REQUEST,
    Child: CartRequestForm,
  },
  {
    path: ".*",
    active: state.authRequestReducer.modalActive,
    type: AUTH_REQUEST,
    Child: AuthForm,
  },
  {
    path: ADMIN_PATH,
    active: state.adminRequestReducer.modalActive,
    type: ADMIN_REQUEST,
    Child: AdminForms,
  },
];
export default modals;
